import React from 'react';

import Settings from '../../utils/Settings';

const CurrencySelector = ({displayCurrency, switchCurrency}) => {
    const currencies = {
        CAD: {label: "CA $", onClick: () => switchCurrency('CAD')},
        EUR: {label: "EU €", onClick: () => switchCurrency('EUR')},
    }
    const items = Object.keys(currencies).filter(curr => curr !== displayCurrency)
    return (
        <Settings
            label={currencies[displayCurrency].label}
            items={items.map(item => currencies[item])}
            icon={false}
            size="small"
        />
    );
};

export default CurrencySelector;