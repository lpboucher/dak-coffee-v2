'use strict';
const axios = require('axios');
const shipConstants = require('./constants');

const hasFreeOption = (items, orderSummary, withColdItem = false) => {
    const { currency, total, shipTo } = orderSummary;
    return (orderHasSubscriptions(items) && isFromRegion('EU', shipTo)) ||
        (total > getThreshold(currency, shipTo, withColdItem));
};

const hasPickUpOption = (country) => {
    return isFromNL(country);
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

const hasColdBrew = (items, callbackType='one') => {
    const callback = {
        one: items.some(item => isColdBrew(item)),
        all: items.every(item => isColdBrew(item))
    };
    return callback[callbackType];
};

const isGiftCard = (item) => {
    return item.id === '5fc9102b62130e5379f0042e';
};

const isColdBrew = (item) => {
    return item.id === '608ebd5c8e9a182d5e36b8d9';
    // return item.id === '608ebe6970f72e24357e87c7' dev id for cold brew;
};

const getThreshold = (currency, country, requiresCold = false) => {
    /*const shippingThresholds = {
    EUR: { NL: 30, EU: 50, NA: 50, World: 70 },
    CAD: { NL: 45, EU: 75, NA: 75, World: 100 },
  };*/
    const thresholds = requiresCold ? shipConstants.SHIPPING_THRESHOLDS_BY_REGION_COLD : shipConstants.SHIPPING_THRESHOLDS_BY_REGION;
    const locationCode = fromCountryToRegion(country);
    return thresholds[currency.toUpperCase()][locationCode];
};

const isFromRegion = (region, country) => {
    return shipConstants.COUNTRY_CODES_BY_REGION[region].indexOf(country) !== -1;
};

const isFromNL = (country) => {
    return country.toLowerCase() === 'NL'.toLowerCase();
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

const getShippingRateOptions = (currency, country, withColdAddition=false) => {
    const allRates = withColdAddition ? shipConstants.SHIPPING_RATES_BY_REGION_COLD : shipConstants.SHIPPING_RATES_BY_REGION;
    return [allRates[currency.toUpperCase()][getShippingZone(country)]];
};

const fromCountryToRegion = (country) => {
    let locationCode;
    if (country === 'NL') {
        locationCode = 'NL';
    } else if (isFromRegion('EU', country)) {
        locationCode = 'EU';
    } else if (isFromRegion('NA', country)) {
        locationCode = 'NA';
    } else {
        locationCode = 'World';
    }
    return locationCode;
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
    hasPickUpOption,
    hasNoPhysical,
    getFreeShippingOptions,
    getShippingRateOptions,
    isFromRegion,
    isFromNL,
    hasGiftCard,
    hasColdBrew,
    isGiftCard,
    isColdBrew,
    createShippingParcel
};
