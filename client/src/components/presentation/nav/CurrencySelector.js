import React from 'react';

import NavItemWithDrop from '../nav/SubNavItemWithDrop';
import DropItem from '../../utils/DropItem';

const CurrencySelector = ({displayCurrency, switchCurrency}) => {
    const currencies = {
        CAD: {label: "CA $", onClick: () => switchCurrency('CAD')},
        EUR: {label: "EU €", onClick: () => switchCurrency('EUR')},
    }
    const items = Object.keys(currencies).filter(curr => curr !== displayCurrency)
    return (
        <NavItemWithDrop label={currencies[displayCurrency].label}>
            {items.map(item => 
                <DropItem key={currencies[item].label} to="#" onClick={currencies[item].onClick}>{currencies[item].label}</DropItem>
            )}
        </NavItemWithDrop>
    );
};

export default CurrencySelector;