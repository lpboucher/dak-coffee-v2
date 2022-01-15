'use strict';
const {
    hasNoPhysical,
    hasFreeOption,
    hasPickUpOption,
    hasColdBrew,
    getFreeShippingOptions,
    getShippingRateOptions,
    getWholesaleShippingRateOption,
    hasGiftCard,
    isGiftCard,
    isFromRegion,
    isFromNL,
    createShippingParcel,
    hasDiscountedShipping
} = require('../utils/shipping/tools');
const promo = require('../../promo/controllers/promo');
const groupBy = require('../../utils/dataFormats').groupBy;

const getTaxes = (ctx) => {
    const orderData = ctx.request.body.content;
    let taxes = [];
    if(!isTaxCollected(orderData.billingAddress.country)) {
        taxes.push({'name': 'No Tax', 'amount': 0, 'rate': 0, 'numberForInvoice': 'TAX-000', 'includedInPrice': true});
    } else {
        taxes = [...taxes, ...aggregateItemTaxes(orderData.items.map(item => getTaxPerItem(item)))];
    }
    return {'taxes': taxes};
};

const getShippingRates = (ctx) => {
    const orderData = ctx.request.body.content;
    const summary = { currency: orderData.currency, total: orderData.itemsTotal, shipTo: orderData.shippingAddress.country};
    let rates = [];
    if (hasNoPhysical(orderData.items)) {
        return {'rates': [{'cost': 0, 'description': 'Digital Product'}]};
    }

    if (hasFreeOption(orderData.items, summary, hasColdBrew(orderData.items))) {
        rates = [...rates, ...getFreeShippingOptions(summary.shipTo)];
    }

    if (hasPickUpOption(summary.shipTo)) {
        rates = [...rates, {'cost': 0, 'description': 'Pickup at Nieuwendammerdijk 526M-8. Mon/Wed afternoons, 48h after order'}, {'cost': 3.5, 'description': 'Bike delivery in AMS, MON/WED'}];
    }

    rates = [...rates, ...getShippingRateOptions(summary.currency, summary.shipTo, hasColdBrew(orderData.items))];
    return {'rates': rates};
};

const handleEvent = async (ctx) => {
    const event = ctx.request.body;
    const { items, user, shippingAddress, invoiceNumber, email } = event.content;

    switch (event.eventName) {

        case 'order.completed':
            if (hasGiftCard(items)) {
                const giftCard = items.find(item => isGiftCard(item));
                try {
                    const promoCode = await promo.generateSnipcartPromo('gift', giftCard.unitPrice);
                    await promo.sendCodeEmail(user, promoCode);
                } catch(err) {
                    if (Array.isArray(err)) {
                        err.map(oneerror => console.log(oneerror.messages));
                    } else {
                        console.log(err);
                    }
                }
            }
            if (isFromRegion('EU', shippingAddress.country)) {
                try {
                    await createShippingParcel(shippingAddress, email, invoiceNumber);
                } catch(err) {
                    if (Array.isArray(err)) {
                        err.map(oneerror => console.log(oneerror.messages));
                    } else {
                        console.log(err);
                    }
                }
            }
            ctx.response.status = 200;
            ctx.send({});

        // eslint-disable-next-line no-fallthrough
        default:
            ctx.response.status = 200;
            ctx.send({});
    }
};

const getWholesaleTaxes = async (ctx) => {
    const orderData = ctx.request.body.content;
    let taxes = [];
    let orderingCustomer = {};

    try {
        orderingCustomer = await strapi.query('customer').model.findOne({ email:orderData.email });
    } catch (err) {
        orderingCustomer.VAT = null;
    }

    if(shouldVATBeCharged(orderData.billingAddress.country, orderingCustomer.VAT)) {
        taxes = [
            ...taxes,
            ...aggregateItemTaxes(
                orderData.items.map(item => getTaxPerItem(item)),
                orderData.shippingInformation.fees || 0,
                {'includedInPrice': false, 'appliesOnShipping': false}
            )
        ];
    } else {
        taxes.push({'name': 'No Tax', 'amount': 0, 'rate': 0, 'numberForInvoice': 'TAX-000', 'includedInPrice': true});
    }

    return {'taxes': taxes};
};

const getWholesaleShippingRates = (ctx) => {
    const orderData = ctx.request.body.content;

    const shippingTo = orderData.shippingAddress.country ? orderData.shippingAddress.country : orderData.billingAddress.country;
    const shippingMethod = getWholesaleShippingRateOption(shippingTo);

    let discountMultiplier = 1;

    if (hasDiscountedShipping(orderData.items)) {
        discountMultiplier = isFromRegion('EU', shippingTo) ? 0 : 0.5;
    }

    return {'rates': [{ ...shippingMethod, 'cost': discountMultiplier * shippingMethod.cost }]};
};

module.exports = {
    getShippingRates,
    getWholesaleShippingRates,
    getTaxes,
    getWholesaleTaxes,
    handleEvent,
};

// TO DO move to own util file
const aggregateItemTaxes = (taxPerItem, shippingFees = 0, taxOptions = {'includedInPrice': true, 'appliesOnShipping': false}) => {
    let taxes = [];
    const shippingTaxTotal = Math.round(0.21 * shippingFees * 100) / 100;
    const coffeeTaxTotal = getTaxRateTotal(taxPerItem, 0.09);
    const otherTaxTotal = getTaxRateTotal(taxPerItem, 0.21) + shippingTaxTotal;
    if (coffeeTaxTotal > 0) {
        taxes.push({'name': '9% VAT (incl.)', 'amount': coffeeTaxTotal, 'rate': 0.09, 'numberForInvoice': 'TAX-COF', ...taxOptions});
    }
    if (otherTaxTotal > 0) {
        taxes.push({'name': '21% VAT (incl.)', 'amount': otherTaxTotal, 'rate': 0.21, 'numberForInvoice': 'TAX-PROD', ...taxOptions});
    }

    return taxes;
};

const getTaxPerItem = ({customFields, totalPrice}) => {
    const taxRate = isCoffeeProduct(customFields) ? 0.09 : 0.21;
    return {'amount': Math.round(taxRate * totalPrice * 100) / 100, 'rate': taxRate};
};

const getTaxRateTotal = (items, rate) => {
    return items.reduce((total, one) => {
        if (one.rate === rate) {
            total += one.amount;
        }
        return total;
    }, 0);
};

const isTaxCollected = (country) => {
    return isFromRegion('EU', country);
};

const shouldVATBeCharged = (country, customerVAT) => {
    return isFromNL(country) && (isFromRegion('EU', country) && customerVAT != null);
};

const isCoffeeProduct = (itemFields) => {
    return itemFields.some(field => field.name.toLowerCase() === 'Weight'.toLowerCase());
};
