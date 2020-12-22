'use strict';
const shipTools = require('../utils/shipping/tools');
const promo = require('../../promo/controllers/promo');

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
  if (shipTools.hasNoPhysical(orderData.items)) {
    return {'rates': [{'cost': 0, 'description': 'Digital Product'}]};
  }
  if (shipTools.hasFreeOption(orderData.items, summary)) {
    rates = [...rates, ...shipTools.getFreeShippingOptions(summary.shipTo)];
  }
  rates = [...rates, ...shipTools.getShippingRateOptions(summary.currency, summary.shipTo)];
  return {'rates': rates};
};

const handleEvent = async (ctx) => {
  const event = ctx.request.body;
  const { items, user, shippingAddress, invoiceNumber, email } = event.content;

  switch (event.eventName) {

    case 'order.completed':
      if (shipTools.hasGiftCard(items)) {
        const giftCard = items.find(item => shipTools.isGiftCard(item));
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
      if (shipTools.isFromRegion('EU', shippingAddress.country)) {
        try {
          await shipTools.createShippingParcel(shippingAddress, email, invoiceNumber);
        } catch(err) {
          if (Array.isArray(err)) {
            err.map(oneerror => console.log(oneerror.messages));
          } else {
            console.log(err);
          }
        }
      }
      return;

    default:
      return;
  }
};

module.exports = {
  getShippingRates,
  getTaxes,
  handleEvent,
};

// TO DO move to own util file
const aggregateItemTaxes = (taxPerItem) => {
  return taxPerItem.reduce((taxes, tax) => {
    const existingIndex = taxes.findIndex(i => i.rate === tax.rate);
    if (existingIndex !== -1) {
      taxes[existingIndex] = {
        ...taxes[existingIndex],
        rate: taxes[existingIndex].amount + tax.amount
      };
    } else {
      taxes.push(tax);
    }
    return taxes;
  }, []);
};

const getTaxPerItem = ({customFields, totalPrice}) => {
  if (isCoffeeProduct(customFields)) {
    return {'name': '9% VAT (incl.)', 'amount': Math.round(0.09 * totalPrice * 100) / 100, 'rate': 0.09, 'numberForInvoice': 'TAX-COF', 'includedInPrice': true, 'appliesOnShipping': false};
  }
  return {'name': '21% VAT (incl.)', 'amount': Math.round(0.21 * totalPrice * 100) / 100, 'rate': 0.21, 'numberForInvoice': 'TAX-PROD', 'includedInPrice': true, 'appliesOnShipping': false};
};

const isTaxCollected = (country) => {
  return shipTools.isFromRegion('EU', country);
};

const isCoffeeProduct = (itemFields) => {
  return itemFields.some(field => field.name === 'Weight');
};
