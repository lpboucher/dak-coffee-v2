const GIFT_CARD_ID = '5fc9102b62130e5379f0042e';
const PUBLIC_EVENT_ID = '63adbdf0d0fe2b56a20b0e0c';
const SHIPCLOUD_ENDPOINT = 'https://panel.sendcloud.sc/api/v2';
const GEOAPIFY_ENDPOINT = 'https://api.geoapify.com/v1/geocode/search?text=';

const COUNTRY_CODES_BY_REGION = {
    EU: ['AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'],
    NA: ['US', 'CA']
};

const COUNTRY_CODES_VAT_BY_REGION = {
    EU: ['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'],
    NA: ['US', 'CA', 'CH']
};

/*
OLD REGIONS FOR SHIPPING
{
    '0': ['NL'],
    '1': ['BE', 'DE'],
    '2': ['LU', 'FR', 'AT', 'DK'],
    '3': ['SE', 'HU', 'CZ', 'PL', 'SK', 'SI', 'LV', 'GB'],
    '4': ['PT', 'ES', 'IT', 'EE', 'IE'],
    '5': ['CH', 'NO'],
    '6': ['BG', 'FI', 'GR', 'CY', 'HR', 'LT', 'MK', 'MT', 'RU', 'RO'],
    '7': ['US', 'CA'],
};

OLD RATES FOR SHIPPING
{
    EUR: {
        '0': {'cost': 4.45, 'description': 'NL Shipping'},
        '1': {'cost': 6.95, 'description': 'EU (BE, DE) Shipping'},
        '2': {'cost': 8.95, 'description': 'EU-1 Shipping'},
        '3': {'cost': 10.75, 'description': 'EU-2/UK Shipping'},
        '4': {'cost': 12, 'description': 'EU-2 Shipping'},
        '5': {'cost': 15, 'description': 'EFTA Shipping'},
        '6': {'cost': 19.95, 'description': 'EU-3 Shipping'},
        '7': {'cost': 20, 'description': 'NA Shipping (ships 1st & 15th)'},
        '8': {'cost': 25, 'description': 'World Shipping'}
    },
    CAD: {
        '0': {'cost': 6.50, 'description': 'NL Shipping'},
        '1': {'cost': 10, 'description': 'EU (BE, DE) Shipping'},
        '2': {'cost': 15, 'description': 'EU-1 Shipping'},
        '3': {'cost': 16, 'description': 'EU-2/UK Shipping'},
        '4': {'cost': 18, 'description': 'EU-2 Shipping'},
        '5': {'cost': 24, 'description': 'EFTA Shipping'},
        '6': {'cost': 30, 'description': 'EU-3 Shipping'},
        '7': {'cost': 30, 'description': 'NA Shipping (ships 1st & 15th)'},
        '8': {'cost': 40, 'description': 'World Shipping'}
    },
}
*/

const SHIPPING_ZONES = {
    '0': ['NL'],
    '1': ['BE', 'LU'],
    '2': ['AT', 'CZ', 'DE', 'DK', 'FR', 'PL', 'RO', 'SK', 'SI'],
    '3': ['GB'],
    '4': ['IT', 'ES'],
    '5': ['IE', 'PT', 'SE', 'FI', 'EE'],
    '6': ['BG', 'HR', 'GR', 'HU', 'LV', 'LT', 'ME', 'MK'],
    '7': ['NO', 'CH'],
    '8': ['CY', 'MT'],
    '9': ['US', 'CA'],
};

const SHIPPING_RATES_BY_REGION = {
    EUR: {
        '0': [
            {'cost': 4.95, 'description': 'GLS'},
        ],
        '1': [
            {'cost': 6.95, 'description': 'GLS'},
        ],
        '2': [
            {'cost': 7.95, 'description': 'GLS'},
            {'cost': 14.25, 'description': 'DHL Economy'},
            {'cost': 19.95, 'description': 'DHL Express'},
        ],
        '3': [
            {'cost': 12.25, 'description': 'DHL Economy'},
            {'cost': 17.95, 'description': 'DHL Express'},
        ],
        '4': [
            {'cost': 10.95, 'description': 'GLS'},
            {'cost': 13.95, 'description': 'DHL Economy'},
            {'cost': 15.25, 'description': 'DHL Express'},
        ],
        '5': [
            {'cost': 10.95, 'description': 'GLS'},
            {'cost': 14.95, 'description': 'DHL Economy'},
            {'cost': 16.95, 'description': 'DHL Express'},
        ],
        '6': [
            {'cost': 17.95, 'description': 'DHL Economy'},
            {'cost': 19.95, 'description': 'DHL Express'},
        ],
        '7': [
            {'cost': 17.95, 'description': 'DHL Economy'},
            {'cost': 19.95, 'description': 'DHL Express'},
        ],
        '8': [
            {'cost': 17.95, 'description': 'DHL Economy'},
            {'cost': 19.95, 'description': 'DHL Express'},
        ],
        '9': [
            {'cost': 19.95, 'description': 'DHL Express'},
        ],
        '10': [
            {'cost': 24.95, 'description': 'DHL Express'},
        ],
    },
    CAD: {
        '0': [
            {'cost': 7.95, 'description': 'GLS'},
        ],
        '1': [
            {'cost': 10.95, 'description': 'GLS'},
        ],
        '2': [
            {'cost': 11.95, 'description': 'GLS'},
            {'cost': 21.25, 'description': 'DHL Economy'},
            {'cost': 29.95, 'description': 'DHL Express'},
        ],
        '3': [
            {'cost': 19.25, 'description': 'DHL Economy'},
            {'cost': 24.95, 'description': 'DHL Express'},
        ],
        '4': [
            {'cost': 15.95, 'description': 'GLS'},
            {'cost': 20.95, 'description': 'DHL Economy'},
            {'cost': 23.25, 'description': 'DHL Express'},
        ],
        '5': [
            {'cost': 15.95, 'description': 'GLS'},
            {'cost': 22.95, 'description': 'DHL Economy'},
            {'cost': 25.95, 'description': 'DHL Express'},
        ],
        '6': [
            {'cost': 26.95, 'description': 'DHL Economy'},
            {'cost': 29.95, 'description': 'DHL Express'},
        ],
        '7': [
            {'cost': 26.95, 'description': 'DHL Economy'},
            {'cost': 29.95, 'description': 'DHL Express'},
        ],
        '8': [
            {'cost': 26.95, 'description': 'DHL Economy'},
            {'cost': 29.95, 'description': 'DHL Express'},
        ],
        '9': [
            {'cost': 29.95, 'description': 'DHL Express'},
        ],
        '10': [
            {'cost': 36.95, 'description': 'DHL Express'},
        ],
    },
};

const SHIPPING_THRESHOLDS_BY_REGION = {
    EUR: {
        '0': 45,
        '1': 50,
        '2': 60,
        '3': 70,
        '4': 65,
        '5': 65,
        '6': 75,
        '7': 75,
        '8': 75,
        '9': 100,
        '10': 150,
    },
    CAD: {
        '0': 70,
        '1': 75,
        '2': 90,
        '3': 105,
        '4': 95,
        '5': 95,
        '6': 105,
        '7': 105,
        '8': 105,
        '9': 150,
        '10': 225,
    },
};

const FREE_SHIPPING_BY_REGION = {
    EUR: {
        '0': [
            {'cost': 0, 'description': 'GLS'},
        ],
        '1': [
            {'cost': 0, 'description': 'GLS'},
        ],
        '2': [
            {'cost': 0, 'description': 'GLS'},
            {'cost': 6.3, 'description': 'DHL Economy'},
            {'cost': 12, 'description': 'DHL Express'},
        ],
        '3': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 5.7, 'description': 'DHL Express'},
        ],
        '4': [
            {'cost': 0, 'description': 'GLS'},
            {'cost': 3, 'description': 'DHL Economy'},
            {'cost': 4.3, 'description': 'DHL Express'},
        ],
        '5': [
            {'cost': 0, 'description': 'GLS'},
            {'cost': 4, 'description': 'DHL Economy'},
            {'cost': 6, 'description': 'DHL Express'},
        ],
        '6': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 5, 'description': 'DHL Express'},
        ],
        '7': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 5, 'description': 'DHL Express'},
        ],
        '8': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 5, 'description': 'DHL Express'},
        ],
        '9': [
            {'cost': 0, 'description': 'DHL Express'},
        ],
        '10': [
            {'cost': 0, 'description': 'DHL Express'},
        ],
    },
    CAD: {
        '0': [
            {'cost': 0, 'description': 'GLS'},
        ],
        '1': [
            {'cost': 0, 'description': 'GLS'},
        ],
        '2': [
            {'cost': 0, 'description': 'GLS'},
            {'cost': 9.5, 'description': 'DHL Economy'},
            {'cost': 18, 'description': 'DHL Express'},
        ],
        '3': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 9.5, 'description': 'DHL Express'},
        ],
        '4': [
            {'cost': 0, 'description': 'GLS'},
            {'cost': 4.5, 'description': 'DHL Economy'},
            {'cost': 6.5, 'description': 'DHL Express'},
        ],
        '5': [
            {'cost': 0, 'description': 'GLS'},
            {'cost': 6, 'description': 'DHL Economy'},
            {'cost': 9, 'description': 'DHL Express'},
        ],
        '6': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 7.5, 'description': 'DHL Express'},
        ],
        '7': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 7.5, 'description': 'DHL Express'},
        ],
        '8': [
            {'cost': 0, 'description': 'DHL Economy'},
            {'cost': 7.5, 'description': 'DHL Express'},
        ],
        '9': [
            {'cost': 0, 'description': 'DHL Express'},
        ],
        '10': [
            {'cost': 0, 'description': 'DHL Express'},
        ],
    },
};

const WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD = {
    EU: 20,
    NA: 30
};

const WHOLESALE_SHIPPING_RATES_BY_REGION = {
    '0': [
        {'cost': 0, 'description': 'GLS'},
    ],
    '1': [
        {'cost': 7.5, 'description': 'GLS'},
    ],
    '2': [
        {'cost': 12, 'description': 'GLS'},
        {'cost': 36, 'description': 'DHL Economy'},
        {'cost': 60, 'description': 'DHL Express'},
    ],
    '3': [
        {'cost': 20, 'description': 'DHL Economy'},
        {'cost': 50, 'description': 'DHL Express'},
    ],
    '4': [
        {'cost': 20, 'description': 'GLS'},
        {'cost': 30, 'description': 'DHL Economy'},
        {'cost': 40, 'description': 'DHL Express'},
    ],
    '5': [
        {'cost': 21.95, 'description': 'GLS'},
        {'cost': 32, 'description': 'DHL Economy'},
        {'cost': 45, 'description': 'DHL Express'},
    ],
    '6': [
        {'cost': 25, 'description': 'DHL Economy'},
        {'cost': 40, 'description': 'DHL Express'},
    ],
    '7': [
        {'cost': 25, 'description': 'DHL Economy'},
        {'cost': 40, 'description': 'DHL Express'},
    ],
    '8': [
        {'cost': 40, 'description': 'UPS'},
        {'cost': 100, 'description': 'DHL Economy'},
        {'cost': 150, 'description': 'DHL Express'},
    ],
    // CAN ONLY RETURN ONE ELEMENT IN ARRAY FOR NON-EU
    '9': [
        {'cost': 10, 'description': 'DHL Express', 'perkilo': 4.5},
    ],
    '10': [
        {'cost': 10, 'description': 'DHL Express', 'perkilo': 5.5},
    ],
};

const WHOLESALE_FREE_SHIPPING_BY_REGION = {
    '0': [
        {'cost': 0, 'description': 'GLS'},
    ],
    '1': [
        {'cost': 0, 'description': 'GLS'},
    ],
    '2': [
        {'cost': 0, 'description': 'GLS'},
        {'cost': 24, 'description': 'DHL Economy'},
        {'cost': 48, 'description': 'DHL Express'},
    ],
    '3': [
        {'cost': 0, 'description': 'DHL Economy'},
        {'cost': 30, 'description': 'DHL Express'},
    ],
    '4': [
        {'cost': 0, 'description': 'GLS'},
        {'cost': 10, 'description': 'DHL Economy'},
        {'cost': 20, 'description': 'DHL Express'},
    ],
    '5': [
        {'cost': 0, 'description': 'GLS'},
        {'cost': 10.05, 'description': 'DHL Economy'},
        {'cost': 23.05, 'description': 'DHL Express'},
    ],
    '6': [
        {'cost': 0, 'description': 'DHL Economy'},
        {'cost': 15, 'description': 'DHL Express'},
    ],
    '7': [
        {'cost': 0, 'description': 'DHL Economy'},
        {'cost': 15, 'description': 'DHL Express'},
    ],
    '8': [
        {'cost': 0, 'description': 'UPS'},
        {'cost': 60, 'description': 'DHL Economy'},
        {'cost': 110, 'description': 'DHL Express'},
    ],
    '9': [
        {'cost': 10, 'description': 'DHL Express', 'perkilo': 3.0},
    ],
    '10': [
        {'cost': 10, 'description': 'DHL Express', 'perkilo': 5.5},
    ],
};

const GEOAPIFY_QUERY = (query) => {
    return `${GEOAPIFY_ENDPOINT}${query}&format=json&apiKey=${strapi.config.currentEnvironment.geoapifyKey}`;
};

module.exports = {
    GIFT_CARD_ID,
    PUBLIC_EVENT_ID,
    SHIPCLOUD_ENDPOINT,
    COUNTRY_CODES_BY_REGION,
    COUNTRY_CODES_VAT_BY_REGION,
    SHIPPING_ZONES,
    SHIPPING_RATES_BY_REGION,
    SHIPPING_THRESHOLDS_BY_REGION,
    FREE_SHIPPING_BY_REGION,
    WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD,
    WHOLESALE_SHIPPING_RATES_BY_REGION,
    WHOLESALE_FREE_SHIPPING_BY_REGION,
    GEOAPIFY_QUERY,
};
