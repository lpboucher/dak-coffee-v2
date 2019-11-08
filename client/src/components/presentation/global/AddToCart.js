import React from 'react';

import WithHover from '../../utils/WithHover';

import { Add } from 'grommet-icons';

const AddToCart = ({id, name, price, stock, url, description, selected=null, ...rest}) => {
    const { increments, varieties, roast } = price.eur;
    const options = increments ? increments.map((inc) => `${inc.option}${inc.increment}`) : null;
    const prices = Object.keys(price).reduce((acc, curr) => { return { ...acc, [curr]: price[curr].value.toFixed(2) }; }, {})
    return (
        <>
        {stock < 1 ? null :
        <WithHover
            className="snipcart-add-item"
            data-item-id={id}
            data-item-name={name}
            data-item-price={JSON.stringify(prices)}
            data-item-url={"https://1d4b5b9f.ngrok.io/snipcartParser"}
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
            isHoverable={!(stock < 1)}
            {...rest}
        >
            {rest.children ? rest.children : <Add size="small" />}
        </WithHover>
        }
        </>
    );
};

export default AddToCart;