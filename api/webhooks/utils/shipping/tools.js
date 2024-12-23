/* eslint-disable quotes */
'use strict';
const axios = require('axios');
const shipConstants = require('./constants');

const hasFreeOption = (orderSummary) => {
    const { currency, total, shipTo } = orderSummary;
    return (total > getThreshold(currency, shipTo));
};

const hasDiscountedShipping = (items, region) => {
    if (region !== 'EU' && region !== 'NA') {
        return false;
    }
    // return getTotalWeightOfItems(items, true) >= shipConstants.WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD[region];
    return getTotalWeightOfItems(items, true) >= shipConstants.FIXED_WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD;
};

const getWeightCustomField = (item) => {
    return item.customFields.find((oneField) => oneField.name.toLowerCase() === 'Weight'.toLowerCase());
};

const getTotalWeightOfItems = (items, onlyCoffee = false) => {
    const weight = items.reduce((total, oneItem) => {
        const weightField = getWeightCustomField(oneItem);
        if (weightField != null) {
            total += oneItem.quantity * convertWeightStringToNumber(weightField.value);
        } else {
            const otherItemWeight = onlyCoffee === false ? oneItem.quantity * 0.1 : 0;
            total += otherItemWeight;
        }
        return total;
    }, 0);

    return weight.toFixed(3);
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

const getThreshold = (currency, country) => {
    const allThresholds = shipConstants.SHIPPING_THRESHOLDS_BY_REGION;
    return [allThresholds[currency.toUpperCase()][getShippingZone(country)]];
};

const getRegionFromCountry = (country) => {
    const region = Object.keys(shipConstants.COUNTRY_CODES_BY_REGION).find(region => shipConstants.COUNTRY_CODES_BY_REGION[region].includes(country))
    if (region == null) {
        return 'World';
    }
    return region;
};

const isFromRegion = (region, country) => {
    return shipConstants.COUNTRY_CODES_BY_REGION[region].indexOf(country) !== -1;
};

const isFromVATRegion = (region, country) => {
    return shipConstants.COUNTRY_CODES_VAT_BY_REGION[region].indexOf(country) !== -1;
};

const isFromNL = (country) => {
    return country.toLowerCase() === 'NL'.toLowerCase();
};

const getFreeShippingOptions = (currency, country, isWholesale = false) => {
    const rateDict = isWholesale === true ? shipConstants.WHOLESALE_FREE_SHIPPING_BY_REGION : shipConstants.FREE_SHIPPING_BY_REGION[currency.toUpperCase()];
    return rateDict[getShippingZone(country)];
};

const getShippingZone = (country) => {
    const zone = Object.keys(shipConstants.SHIPPING_ZONES).find(zone => shipConstants.SHIPPING_ZONES[zone].indexOf(country) !== -1);
    return zone ? zone : '11';
};

const getShippingRateOptions = (currency, country, isWholesale = false) => {
    const rateDict = isWholesale === true ? shipConstants.WHOLESALE_SHIPPING_RATES_BY_REGION : shipConstants.SHIPPING_RATES_BY_REGION[currency.toUpperCase()];
    return rateDict[getShippingZone(country)];
};

const getWholesaleShippingRateOption = (country, withDiscount = false) => {
    const rateDict = withDiscount === true ? shipConstants.WHOLESALE_FREE_SHIPPING_BY_REGION : shipConstants.WHOLESALE_SHIPPING_RATES_BY_REGION;
    return rateDict[getShippingZone(country)];
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

const createShippingParcel = async (shippingAddress, email, invoiceNumber, items = []) => {
    console.log('SENDING ADDRESS:', shippingAddress);
    console.log('SENDING EMAIL:', email);
    console.log('SENDING INVOICE NUMBER:', invoiceNumber);
    console.log('SENDING ITEMS:', items);
    console.log('SENDING ORDER ITEMS:', items);
    try {
        const requiresState = shippingAddress.country === 'CA' || shippingAddress.country === 'US' || shippingAddress.country === 'IT';
        const requiresAddress2Placeholder = shippingAddress.address2 == null || shippingAddress.address2 === '';
        console.log('PARCEL:', {
            parcel: {
                name: shippingAddress.fullName,
                address: shippingAddress.address1,
                address_2: requiresAddress2Placeholder === true ? '-' : shippingAddress.address2,
                city: shippingAddress.city,
                postal_code: shippingAddress.postalCode,
                request_label: false,
                email: email,
                country: shippingAddress.country,
                telephone: shippingAddress.phone || '',
                order_number: invoiceNumber,
                country_state: (requiresState === true ? shippingAddress.province : ''),
                customs_shipment_type: 2,
                customs_invoice_nr: invoiceNumber,
                parcel_items: buildItemsImportDeclaration(items),
                weight: getTotalWeightOfItems(items, true),
                total_order_value: getTotalOrderValueFromCustomsItems(buildItemsImportDeclaration(items)),
            }
        });
        return await axios.post(
            `${shipConstants.SHIPCLOUD_ENDPOINT}/parcels`,
            {
                parcel: {
                    name: shippingAddress.fullName,
                    address: shippingAddress.address1,
                    address_2: requiresAddress2Placeholder === true ? '-' : shippingAddress.address2,
                    city: shippingAddress.city,
                    postal_code: shippingAddress.postalCode,
                    request_label: false,
                    email: email,
                    country: shippingAddress.country,
                    telephone: shippingAddress.phone || '',
                    order_number: invoiceNumber,
                    country_state: (requiresState === true ? shippingAddress.province : ''),
                    customs_shipment_type: 2,
                    customs_invoice_nr: invoiceNumber,
                    parcel_items: buildItemsImportDeclaration(items),
                    weight: getTotalWeightOfItems(items, true),
                    total_order_value: getTotalOrderValueFromCustomsItems(buildItemsImportDeclaration(items)),
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
    getRegionFromCountry,
    isFromVATRegion,
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

const buildItemsImportDeclaration = (items) => {
    return items.reduce((importProducts, oneItem) => {
        const weightField = getWeightCustomField(oneItem);
        if (weightField != null) {
            importProducts.push(generateCustomsItem(weightField.value, oneItem.quantity));
        }
        return importProducts;
    }, []);
};

const getTotalOrderValueFromCustomsItems = (items) => {
    return items.reduce((orderValue, oneItem) => {
        const totalValueOfItem = oneItem.quantity * oneItem.value;
        return orderValue + totalValueOfItem;
    }, 0);
};

const generateCustomsItem = (weightString, quantity) => {
    const weightInKgs = convertWeightStringToNumber(weightString);
    return {
        "hs_code": "09012100",
        "weight": weightInKgs.toString(),
        "quantity": quantity,
        "description":"roasted coffee bean bag",
        "origin_country":"NL",
        "value": weightInKgs >= 1 ? 5 : 3,
    };
};
