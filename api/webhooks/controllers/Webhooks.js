'use strict';

/**
 * A set of functions called "actions" for `Webhooks`
 */

const COUNTRIES = {
  EU: ['AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'],
  NA: ['US', 'CA']
};

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
  const summary = { currency: orderData.currency, total: orderData.itemsTotal };
  let rates = [];
  if (hasFreeOption(orderData.items, summary)) {
    if(isFromRegion('EU', orderData.shippingAddress.country)) {
      rates = [...rates, {'cost': 0, 'description': 'Free Shipping'}];
    }
    if(isFromRegion('NA', orderData.shippingAddress.country)) {
      rates = [...rates, {'cost': 0, 'description': 'Free Shipping (5-15 business days)'}, {'cost': 25, 'description': 'Express (2-5 business days)'}];
    }
  }
  rates = [...rates, ...calculateRatesPerRegion(orderData.shippingAddress.country)];
  return {'rates': rates};
};

module.exports = {
  getShippingRates,
  getTaxes
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
  return isFromRegion('EU', country);
};

const isCoffeeProduct = (itemFields) => {
  return itemFields.some(field => field.name === 'Weight');
};

const calculateRatesPerRegion = (country) => {
  if(isFromRegion('EU', country)) return [{'cost': 3.5, 'description': 'EU Shipping'}];
  if(isFromRegion('NA', country)) return [
    {'cost': 7.5, 'description': 'Regular NA (ships 1st & 15th of each month)'},
    {'cost': 25, 'description': 'Express (2-5 business days)'}
  ];
  return [{'cost': 20, 'description': 'World Shipping'}];
};

const hasFreeOption = (items, orderSummary) => {
  const { currency, total } = orderSummary;
  return orderHasSubscriptions(items) || isAboveThreshold(currency, total);
};

const isAboveThreshold = (currency, total) => {
  return (currency === 'eur' && total > 50) || (currency === 'cad' && total > 75);
};

const isFromRegion = (region, country) => {
  return COUNTRIES[region].indexOf(country) !== -1;
};

const orderHasSubscriptions = (items) => {
  return items.some(item => item.name === 'The Classics' || item.name === 'The Roaster\'s Choice' || item.name === 'Dak Coffee Subscription');
};
