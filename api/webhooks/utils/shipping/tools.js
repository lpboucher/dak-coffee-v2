const shipConstants = require('./constants');

const hasFreeOption = (items, orderSummary) => {
  const { currency, total, shipTo } = orderSummary;
  return orderHasSubscriptions(items) || (total > getThreshold(currency, shipTo));
};

const orderHasSubscriptions = (items) => {
  return items.some(item => item.name === 'The Classics' || item.name === 'The Roaster\'s Choice' || item.name === 'Dak Subscription');
};

const getThreshold = (currency, country) => {
  let locationCode;
  const shippingThresholds = {
    EUR: { NL: 30, EU: 50, NA: 50, World: 70 },
    CAD: { NL: 45, EU: 75, NA: 75, World: 100 },
  };
  if (country === 'NL') {
    locationCode = 'NL';
  } else if (isFromRegion('EU', country)) {
    locationCode = 'EU';
  } else if (isFromRegion('NA', country)) {
    locationCode = 'NA';
  } else {
    locationCode = 'World';
  }
  return shippingThresholds[currency.toUpperCase()][locationCode];
};

const isFromRegion = (region, country) => {
  return shipConstants.COUNTRY_CODES_BY_REGION[region].indexOf(country) !== -1;
};

const getFreeShippingOptions = (country) => {
  return isFromRegion('EU', country) ?
    shipConstants.FREE_SHIPPING_BY_REGION['EU'] :
    shipConstants.FREE_SHIPPING_BY_REGION['World'];
};

const getShippingZone = (country) => {
  const zone = Object.keys(shipConstants.SHIPPING_ZONES).find(zone => shipConstants.SHIPPING_ZONES[zone].indexOf(country) !== -1);
  return zone ? zone : '4';
};

const getShippingRateOptions = (currency, country) => {
  return [shipConstants.SHIPPING_RATES_BY_REGION[currency.toUpperCase()][getShippingZone(country)]];
};

module.exports = {
  hasFreeOption,
  getFreeShippingOptions,
  getShippingRateOptions,
  isFromRegion
};
