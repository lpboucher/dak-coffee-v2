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
    getRegionFromCountry,
    isFromVATRegion,
    isFromNL,
    createShippingParcel,
    hasDiscountedShipping,
    getTotalWeightOfItems,
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

    if (hasFreeOption(summary)) {
        rates = [...getFreeShippingOptions(summary.currency, summary.shipTo)];
    } else {
        rates = [...rates, ...getShippingRateOptions(summary.currency, summary.shipTo)];
    }

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

            try {
                await createShippingParcel(shippingAddress, email, invoiceNumber, items);
            } catch(err) {
                if (Array.isArray(err)) {
                    err.map(oneerror => console.log(oneerror.messages));
                } else {
                    console.log(err);
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

    if (orderData.billingAddress.country != null && orderData.shippingAddress.country != null) {
        const countryAddress = orderData.billingAddress.country ? orderData.billingAddress.country : orderData.shippingAddress.country;

        if(shouldVATBeCharged(countryAddress, orderingCustomer.VAT)) {
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
    } else {
        taxes.push({'name': 'Calculated at checkout...', 'amount': 0, 'rate': 0, 'numberForInvoice': 'TAX-INV', 'includedInPrice': true});
    }

    return {'taxes': taxes};
};

const getWholesaleShippingRates = (ctx) => {
    const orderData = ctx.request.body.content;
    const summary = { currency: orderData.currency, total: orderData.itemsTotal, shipTo: orderData.shippingAddress.country};

    const shippingTo = orderData.shippingAddress.country ? orderData.shippingAddress.country : orderData.billingAddress.country;

    let rates = [];

    if (isFromRegion('EU', shippingTo)) {
        rates = hasDiscountedShipping(orderData.items, 'EU') ? [...getFreeShippingOptions(summary.currency, summary.shipTo, true)] : [...rates, ...getShippingRateOptions(summary.currency, summary.shipTo, true)];
    } else {
        const shippingMethods = getWholesaleShippingRateOption(shippingTo, hasDiscountedShipping(orderData.items, getRegionFromCountry(summary.shipTo)));
        const shippingMethod = shippingMethods[0];
        const calculatedCost = shippingMethod['cost'] + (getTotalWeightOfItems(orderData.items) * shippingMethod['perkilo']);
        rates = [{ 'description': shippingMethod['description'], 'cost': calculatedCost }];
    }

    return {'rates': rates};
};

const createShippingLabel = async (ctx) => {
    const { address, email, invoiceNumber, items } = ctx.request.body;
    const orderItems = (
        (items != null) &&
        (Array.isArray(items)) &&
        (items.length > 0)
    ) ? items : [];

    console.log('RECEIVED ADDRESS:', address);
    console.log('RECEIVED EMAIL:', email);
    console.log('RECEIVED INVOICE NUMBER:', invoiceNumber);
    console.log('RECEIVED ITEMS:', items);
    console.log('RECEIVED ORDER ITEMS:', orderItems);

    try {
        await createShippingParcel(address, email, invoiceNumber, orderItems);
    } catch(err) {
        console.log('ERROR AT createShippingParcel');
        if (Array.isArray(err)) {
            err.map(oneerror => console.log(oneerror.messages));
        } else {
            console.log(err);
            console.log(err.response.data.error);
        }
    }
};

module.exports = {
    getShippingRates,
    getWholesaleShippingRates,
    createShippingLabel,
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
    return isFromVATRegion('EU', country);
};

const shouldVATBeCharged = (country, customerVAT) => {
    return isFromNL(country) && (isFromRegion('EU', country) && customerVAT != null);
};

const isCoffeeProduct = (itemFields) => {
    return itemFields.some(field => field.name.toLowerCase() === 'Weight'.toLowerCase());
};
