import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Text } from 'grommet';
import AddToCart from '../../containers/cart/AddToCartContainer';

const ProductCardInfo = ({id, slug, type, price, currency, t}) => {
    const displayCurr = currency.toLowerCase()
    return (
        <Box height="100%" width="100%" direction="row" align="center" justify="around">
            {price ?
            <>
                <Box flex="grow" margin={{right: "-48px"}}>
                    <Text textAlign="center" weight="bold" style={{textTransform: 'uppercase'}}>{t(`products:${type}.${slug}.name`)}</Text>
                    <Text textAlign="center" color="grey">{`${price[displayCurr].symbol} ${price[displayCurr].value.toFixed(2)}`}</Text>
                </Box>
                <AddToCart productId={id} currency={currency}/>
            </>
            :
            'Loading...'
            }
        </Box>
    );
};

export default withTranslation()(ProductCardInfo);