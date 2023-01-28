'use strict';
const axios = require('axios');
const shipConstants = require('./constants');

const hasFreeOption = (items, orderSummary, withColdItem = false) => {
    const { currency, total, shipTo } = orderSummary;
    return (orderHasSubscriptions(items) && isFromRegion('EU', shipTo)) ||
        (total > getThreshold(currency, shipTo, withColdItem));
};

const hasDiscountedShipping = (items) => {
    return getTotalWeightOfItems(items, true) >= shipConstants.WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD;
};

const getTotalWeightOfItems = (items, onlyCoffee = false) => {
    const weight = items.reduce((total, oneItem) => {
        const weightField = oneItem.customFields.find((oneField) => oneField.name.toLowerCase() === 'Weight'.toLowerCase());
        if (weightField != null) {
            total += oneItem.quantity * convertWeightStringToNumber(weightField.value);
        } else {
            const otherItemWeight = onlyCoffee === false ? oneItem.quantity * 0.1 : 0;
            total += otherItemWeight;
        }
        return total;
    }, 0);

    return weight;
};

const convertWeightStringToNumber = (weight) => {
    const isKilos = weight.includes('kg');
    const rawWeightValue = weight.split(/kg|g/)[0];

    const weightValue = Number.parseInt(rawWeightValue);
    return isKilos ? weightValue : weightValue / 1000;
};

const hasPickUpOption = (country) => {
    return isFromNL(country);
};

const hasNoPhysical = (items) => {
    return hasNoShipItem(items, 'all');
};

const orderHasSubscriptions = (items) => {
    return items.some(item =>
        item.name === 'The Classics' ||
    item.name === 'The Roaster\'s Choice' ||
    item.name === 'Dak Subscription' ||
    item.name === 'Dak Monthly Subscription'
    );
};

const hasNoShipItem = (items, callbackType='one') => {
    const callback = {
        one: items.some(item => isNoShipItem(item)),
        all: items.every(item => isNoShipItem(item))
    };
    return callback[callbackType];
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

const isNoShipItem = (item) => {
    return item.id === shipConstants.GIFT_CARD_ID || item.id === shipConstants.PUBLIC_EVENT_ID;
};

const isGiftCard = (item) => {
    return item.id === shipConstants.GIFT_CARD_ID;
};

const isColdBrew = (item) => {
    return item.id === '608ebd5c8e9a182d5e36b8d9' || item.id === '62554ca03e99af385cd8cced';
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
    return zone ? zone : '8';
};

const getWholesaleShippingZone = (country) => {
    const zone = Object.keys(shipConstants.WHOLESALE_SHIPPING_ZONES).find(zone => shipConstants.WHOLESALE_SHIPPING_ZONES[zone].indexOf(country) !== -1);
    return zone ? zone : '8';
};

const getShippingRateOptions = (currency, country, withColdAddition=false) => {
    const allRates = withColdAddition ? shipConstants.SHIPPING_RATES_BY_REGION_COLD : shipConstants.SHIPPING_RATES_BY_REGION;
    return [allRates[currency.toUpperCase()][getShippingZone(country)]];
};

const getWholesaleShippingRateOption = (country) => {
    return shipConstants.WHOLESALE_SHIPPING_RATES_BY_REGION[getWholesaleShippingZone(country)];
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
    try {
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
                    telephone: shippingAddress.phone || '',
                    order_number: invoiceNumber,
                    country_state: shippingAddress.province || '',
                    customs_shipment_type: 2,
                    customs_invoice_nr: invoiceNumber,
                }
            },
            {
                auth: {
                    username: strapi.config.currentEnvironment.sendcloudKey,
                    password: strapi.config.currentEnvironment.sendcloudSecret,
                }
            }
        );
    } catch (err) {
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
    hasFreeOption,
    hasDiscountedShipping,
    hasPickUpOption,
    hasNoPhysical,
    getFreeShippingOptions,
    getShippingRateOptions,
    getWholesaleShippingRateOption,
    isFromRegion,
    isFromNL,
    hasNoShipItem,
    hasGiftCard,
    hasColdBrew,
    isNoShipItem,
    isGiftCard,
    isColdBrew,
    createShippingParcel,
    convertWeightStringToNumber,
    getTotalWeightOfItems,
};
