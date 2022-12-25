const SHIPPING_ZONES = {
    '0': ['NL'],
    '1': ['BE', 'DE'],
    '2': ['LU', 'FR', 'AT', 'DK'],
    '3': ['SE', 'HU', 'CZ', 'PL', 'SK', 'SI', 'LV', 'GB'],
    '4': ['PT', 'ES', 'IT', 'EE', 'IE'],
    '5': ['CH', 'NO'],
    '6': ['BG', 'FI', 'GR', 'CY', 'HR', 'LT', 'MK', 'MT', 'RU', 'RO'],
    '7': ['US', 'CA'],
};
/*
OLD REGIONS FOR SHIPPING
{
    '0': ['NL'],
    '1': ['AT', 'BE', 'DE', 'DK', 'LU'],
    '2': ['BG', 'CH', 'CY', 'CZ', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HU', 'HR', 'IE', 'IT', 'LT', 'LV', 'MK', 'MT', 'NO', 'PL', 'PT', 'RO', 'RU', 'SE', 'SK', 'SI'],
    '3': ['US', 'CA'],
}

OLD RATES FOR SHIPPING
{
    EUR: {
        '0': {'cost': 4.0, 'description': 'NL Shipping'},
        '1': {'cost': 5.75, 'description': 'EU-1 Shipping'},
        '2': {'cost': 7.75, 'description': 'EU-2 Shipping'},
        '3': {'cost': 15, 'description': 'NA Shipping (ships 1st & 15th)'},
        '4': {'cost': 25, 'description': 'World Shipping'}
    },
    CAD: {
        '0': {'cost': 6, 'description': 'NL Shipping'},
        '1': {'cost': 8.5, 'description': 'EU-1 Shipping'},
        '2': {'cost': 11.5, 'description': 'EU-2 Shipping'},
        '3': {'cost': 20, 'description': 'NA Shipping (ships 1st & 15th)'},
        '4': {'cost': 40, 'description': 'World Shipping'}
    },
}
*/

const WHOLESALE_SHIPPING_ZONES = {
    '0': ['NL'],
    '1': ['BE', 'LU'],
    '2': ['DE', 'FR', 'AT'],
    '3': ['DK', 'SE', 'HU', 'CZ', 'PL', 'SK', 'SI', 'RO'],
    '4': ['PT', 'ES', 'IT', 'LT', 'LV', 'EE', 'GB', 'IE'],
    '5': ['CH', 'NO'],
    '6': ['BG', 'FI', 'GR', 'CY', 'HR', 'MK', 'MT', 'RU'],
    '7': ['US', 'CA'],
};

const WHOLESALE_SHIPPING_RATES_BY_REGION = {
    '0': {'cost': 0, 'description': 'NL Shipping'},
    '1': {'cost': 7.5, 'description': 'Benelux Shipping'},
    '2': {'cost': 12, 'description': 'EU-1 Shipping'},
    '3': {'cost': 15, 'description': 'EU-2 Shipping'},
    '4': {'cost': 18, 'description': 'EU-2/UK Shipping'},
    '5': {'cost': 20, 'description': 'EFTA Shipping'},
    '6': {'cost': 25, 'description': 'EU-3 Shipping'},
    '7': {'cost': 10, 'description': 'NA Shipping', 'perkilo': 4.5},
    '8': {'cost': 10, 'description': 'World Shipping', 'perkilo': 5.5}
};

const WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD = 20;

const COUNTRY_CODES_BY_REGION = {
    EU: ['AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'],
    NA: ['US', 'CA']
};

const FREE_SHIPPING_BY_REGION = {
    EU: [{'cost': 0, 'description': 'Free Shipping'}],
    World: [{'cost': 0, 'description': 'Free Shipping (5-15 business days)'}, {'cost': 25, 'description': 'Express (2-5 business days)'}]
};

const SHIPPING_RATES_BY_REGION = {
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
};

const SHIPPING_RATES_BY_REGION_COLD = {
    EUR: {
        '0': {'cost': 9.5, 'description': 'NL Shipping + cold parcel'},
        '1': {'cost': 12.25, 'description': 'EU-1 Shipping + cold parcel'},
        '2': {'cost': 15, 'description': 'EU-2 Shipping + cold parcel'},
        '3': {'cost': 80, 'description': 'NA Shipping + cold parcel'},
        '4': {'cost': 100, 'description': 'World Shipping + cold parcel'}
    },
    CAD: {
        '0': {'cost': 15, 'description': 'NL Shipping + cold parcel'},
        '1': {'cost': 19.5, 'description': 'EU-1 Shipping + cold parcel'},
        '2': {'cost': 24, 'description': 'EU-2 Shipping + cold parcel'},
        '3': {'cost': 115, 'description': 'NA Shipping + cold parcel'},
        '4': {'cost': 155, 'description': 'World Shipping + cold parcel'}
    },
};

const SHIPPING_THRESHOLDS_BY_REGION = {
    EUR: {
        NL: 40,
        EU: 60,
        NA: 100,
        World: 150
    },
    CAD: {
        NL: 60,
        EU: 90,
        NA: 150,
        World: 225
    },
};

const SHIPPING_THRESHOLDS_BY_REGION_COLD = {
    EUR: { NL: 40, EU: 60, NA: 100, World: 150 },
    CAD: { NL: 60, EU: 90, NA: 150, World: 225 },
};

const SHIPCLOUD_ENDPOINT = 'https://panel.sendcloud.sc/api/v2';

module.exports = {
    COUNTRY_CODES_BY_REGION,
    SHIPPING_RATES_BY_REGION,
    SHIPPING_RATES_BY_REGION_COLD,
    SHIPPING_THRESHOLDS_BY_REGION,
    SHIPPING_THRESHOLDS_BY_REGION_COLD,
    FREE_SHIPPING_BY_REGION,
    SHIPPING_ZONES,
    SHIPCLOUD_ENDPOINT,
    WHOLESALE_SHIPPING_ZONES,
    WHOLESALE_SHIPPING_RATES_BY_REGION,
    WHOLESALE_SHIPPING_DISCOUNT_WEIGHT_THRESHOLD,
};
