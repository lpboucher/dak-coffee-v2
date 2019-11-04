import React from 'react';

import { Box } from 'grommet';

const AddToCart = ({id, name, price, url, description, selected=null, children, ...rest}) => {
    const { increments, varieties, roast } = price.eur;
    const options = increments ? increments.map((inc) => `${inc.option}${inc.increment}`) : null;
    const prices = Object.keys(price).reduce((acc, curr) => { return { ...acc, [curr]: price[curr].value }; }, {})
    return (
        <Box
            className="snipcart-add-item"
            data-item-id={id}
            data-item-name={name}
            data-item-price={JSON.stringify(prices)}
            data-item-url={"http://localhost:1337/snipcartParser"}
            data-item-description={description}
            data-item-custom1-name={options ? "Weight" : null}
            data-item-custom1-options={options ? options.join('|'): null}
            data-item-custom1-value={selected ? selected.quantity : null}
            data-item-custom2-name={varieties ? "Varieties" : null}
            data-item-custom2-options={varieties ? varieties.join('|'): null}
            data-item-custom2-value={selected ? selected.varieties : null}
            data-item-custom3-name={roast ? "Roast" : null}
            data-item-custom3-options={roast ? roast.join('|'): null}
            data-item-custom3-value={selected ? selected.roast : null}
            primary
            color="mainDark"
            margin="small"
            pad="xsmall"
            background="mainDark"
            round="xsmall"
            align="center"
            style={{color: 'white', cursor: 'pointer', textTransform: 'uppercase'}}
            {...rest}
        >
            {children}
            <item-line></item-line>
        </Box>
    );
};

export default AddToCart;