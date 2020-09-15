const SHIPPING_ZONES = {
  '0': ['NL'],
  '1': ['AT', 'BE', 'CH', 'DE', 'DK', 'FR', 'GB', 'IE', 'LU', 'SE'],
  '2': ['BG', 'CY', 'CZ', 'EE', 'ES', 'FI', 'GR', 'HR', 'HU', 'IT', 'LT', 'LV', 'MT', 'NO', 'PL', 'PT', 'RO', 'RU', 'SI', 'SK'],
  '3': ['US', 'CA'],
};

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
    '0': {'cost': 0, 'description': 'NL Shipping'},
    '1': {'cost': 0, 'description': 'EU-1 Shipping'},
    '2': {'cost': 0, 'description': 'EU-2 Shipping'},
    '3': {'cost': 5, 'description': 'NA Shipping (ships 1st & 15th)'},
    '4': {'cost': 20, 'description': 'World Shipping'}
  },
  CAD: {
    '0': {'cost': 0, 'description': 'NL Shipping'},
    '1': {'cost': 0, 'description': 'EU-1 Shipping'},
    '2': {'cost': 0, 'description': 'EU-2 Shipping'},
    '3': {'cost': 7.5, 'description': 'NA Shipping (ships 1st & 15th)'},
    '4': {'cost': 30, 'description': 'World Shipping'}
  },
};

const SHIPPING_THRESHOLDS_BY_REGION = {
  EUR: { NL: 30, EU: 50, NA: 50, World: 70 },
  CAD: { NL: 45, EU: 75, NA: 75, World: 100 },
};

module.exports = {
  COUNTRY_CODES_BY_REGION,
  SHIPPING_RATES_BY_REGION,
  SHIPPING_THRESHOLDS_BY_REGION,
  FREE_SHIPPING_BY_REGION,
  SHIPPING_ZONES
};
