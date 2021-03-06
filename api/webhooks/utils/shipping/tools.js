'use strict';
const axios = require('axios');
const shipConstants = require('./constants');

const hasFreeOption = (items, orderSummary) => {
  const { currency, total, shipTo } = orderSummary;
  return orderHasSubscriptions(items) || (total > getThreshold(currency, shipTo));
};

const hasNoPhysical = (items) => {
  return hasGiftCard(items, 'all');
};

const orderHasSubscriptions = (items) => {
  return items.some(item =>
    item.name === 'The Classics' ||
    item.name === 'The Roaster\'s Choice' ||
    item.name === 'Dak Subscription' ||
    item.name === 'Dak Monthly Subscription'
  );
};

const hasGiftCard = (items, callbackType='one') => {
  const callback = {
    one: items.some(item => isGiftCard(item)),
    all: items.every(item => isGiftCard(item))
  };
  return callback[callbackType];
};

const isGiftCard = (item) => {
  return item.id === '5fc9102b62130e5379f0042e';
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

const createShippingParcel = async (shippingAddress, email, invoiceNumber) => {
  return await axios.post(
    `${shipConstants.SHIPCLOUD_ENDPOINT}/parcels`,
    {
      parcel: {
        name: shippingAddress.fullName,
        address: shippingAddress.address1,
        address_2: shippingAddress.address2,
        city: shippingAddress.city,
        postal_code: shippingAddress.postalCode,
        request_label: false,
        email: email,
        country: shippingAddress.country,
        order_number: invoiceNumber,
      }
    },
    {
      auth: {
        username: strapi.config.currentEnvironment.sendcloudKey,
        password: strapi.config.currentEnvironment.sendcloudSecret,
      }
    }
  );
};

module.exports = {
  hasFreeOption,
  hasNoPhysical,
  getFreeShippingOptions,
  getShippingRateOptions,
  isFromRegion,
  hasGiftCard,
  isGiftCard,
  createShippingParcel
};
