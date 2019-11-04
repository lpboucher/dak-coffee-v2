import React from 'react';

import { Button } from 'grommet';

const BuyButton = ({id, name, price, weight, url, description}) => {
    return (
        <Button
            className="snipcart-add-item BuyButton"
            data-item-id={id}
            data-item-name={name}
            data-item-price={price.eur.value}
            data-item-weight={weight}
            data-item-url={url}
            data-item-description={description}
            primary
            color="mainDark"
            style={{color: 'white'}}
        >
            ADD TO CART ({price.eur.value}{price.eur.symbol})
        </Button>
    );
};

export default BuyButton;