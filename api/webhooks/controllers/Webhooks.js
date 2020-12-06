'use strict';
const mailchimpTx = require('@mailchimp/mailchimp_transactional');
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
  const mailchimp = mailchimpTx(strapi.config.currentEnvironment.mailchimpTrans);
  const event = ctx.request.body;
  const { items, user } = event.content;

  switch (event.eventName) {
    case 'order.completed':
      if (shipTools.hasGiftCard(items)) {
        const giftCard = items.find(item => shipTools.isGiftCard(item));
        const promoCode = await promo.generateSnipcartPromo('gift', giftCard.unitPrice);
        try {
          const res = await mailchimp.messages.sendTemplate({
            template_name: 'gift-card',
            template_content: [
              { name: 'name', content: user.billingAddress.fullName },
              { name: 'code', content: promoCode.code }
            ],
            message: {
              from_email: 'info@dakcoffeeroasters.com',
              subject: 'DAK Gift Card Code',
              to: [
                {email: user.email, type: 'to'}
              ]
            }
          });
          console.log(res);
          ctx.status = 200;
        } catch(err) {
          if (Array.isArray(err)) {
            err.map(oneerror => console.log(oneerror.messages));
          } else {
            console.log(err);
          }
          ctx.throw(400);
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
