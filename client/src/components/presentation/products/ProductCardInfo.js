import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Box, Text } from 'grommet';
import { Add } from 'grommet-icons';
import AddToCart from '../../presentation/global/AddToCart';
//import AddToCart from '../../containers/cart/AddToCartContainer';
import BuyButton from '../../BuyButton';

const WithHover = styled(Box)`
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background-color: ${props => props.outOfStock ? '#dcddde' : '#a96c35'};
    }
`

const ProductCardInfo = ({id, name, slug, type, price, currency, add, outOfStock, t}) => {
    const displayCurr = currency.toLowerCase()
    return (
        <Box height="100%" width="100%" direction="row" align="center" justify="around">
            <Box flex="grow" margin={{right: "-48px"}}>
                <Text textAlign="center" weight="bold" style={{textTransform: 'uppercase'}}>{t(`products:${type}.${slug}.name`)}</Text>
                <Text textAlign="center" color="grey">{`${price[displayCurr].symbol} ${price[displayCurr].value.toFixed(2)}`}</Text>
            </Box>
            {/*<WithHover onClick={!outOfStock ? () => add(id, '1') : null} margin="small" pad="xsmall" background={`${outOfStock ? 'darkGrey' : 'mainDark'}`} outOfStock={outOfStock}>
                <Add size="small" />
            </WithHover>*/}
            <AddToCart
                id={id}
                name={name}
                slug={slug}
                price={price}
                //url={"https://581ce3d7.ngrok.io/"}
            >
                <Add size="small" />
            </AddToCart>
        </Box>
    );
};

export default withTranslation()(ProductCardInfo);