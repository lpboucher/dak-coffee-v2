'use strict';

/**
 * A set of functions called "actions" for `Webhooks`
 */

const COUNTRIES = {
  EU: ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'],
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
  console.log({'taxes': taxes});
  return {'taxes': taxes};
};

const getShippingRates = (ctx) => {
  const orderData = ctx.request.body.content;
  const summary = { currency: orderData.currency, total: orderData.itemsTotal };
  let rates = [];
  if (hasFreeOption(orderData.isRecurringOrder, summary)) {
    rates.push({'cost': 0, 'description': 'Free Shipping'});
  }
  rates.push(calculateRatesPerRegion(orderData.billingAddress.country));
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
  if(isFromRegion('EU', country)) return {'cost': 3.5, 'description': 'EU Shipping'};
  if(isFromRegion('NA', country)) return {'cost': 7.5, 'description': 'NA Shipping'};
  return {'cost': 10, 'description': 'World Shipping'};
};

const hasFreeOption = (isRecurring, orderSummary) => {
  const { currency, total } = orderSummary;
  return isRecurring || isAboveThreshold(currency, total);
};

const isAboveThreshold = (currency, total) => {
  return (currency === 'eur' && total > 50) || (currency === 'cad' && total > 75);
};

const isFromRegion = (region, country) => {
  return COUNTRIES[region].indexOf(country) !== -1;
};
