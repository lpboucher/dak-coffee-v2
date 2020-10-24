import React from 'react';
import { withTranslation } from 'react-i18next';

import { Text } from 'grommet';

const Message = ({t, currency, location, ...rest}) => {
    const EU_COUNTRIES = ['AT', 'BE', 'BG', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
    const NA_COUNTRIES = ['US', 'CA'];
    let loc;
    if (location === "NL") {
      loc = location;
    } else if (EU_COUNTRIES.indexOf(location) !== -1) {
      loc = "EU";
    } else if (NA_COUNTRIES.indexOf(location) !== -1) {
      loc = "NA";
    } else {
      loc = "World"
    };
    const shippingThresholds = {
      EUR: { NL: '€30', EU: '€50', NA: '€50', World: '€70' },
      CAD: { NL: '$45', EU: '$75', NA: '$75', World: '$100'},
    }
    return (
        <Text size={rest && rest.size ? rest.size : null} margin={{left: 'medium', right: 'auto'}}>
          {t("announcement.text", {region: loc, threshold: shippingThresholds[currency][loc]} )}
        </Text>
    );
}

export default withTranslation()(Message);
