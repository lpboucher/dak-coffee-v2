import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { Box, Text, Button } from 'grommet';
//import CartHoverAction from '../../utils/CartHoverAction';

import { coffeeCardInfoLayout } from '../../layouts/globalResponsiveLayout';
import AddToCart from '../../containers/cart/AddToCartContainer';

import Skeleton from 'react-loading-skeleton';

export const CardHover = styled(Box)`
  position: relative;
  width: 100%;
    &:before {
        content: "";
        display: ${({isHidden}) => isHidden ? 'none': 'block'};
        width: 75%;
        border-bottom: 1px solid #979797;
        margin-bottom: 10px;
    }
`

const TruncateText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

const CoffeeCardInfo = ({id, slug, type, price, currency, t, media}) => {
    const displayCurr = currency.toLowerCase();
    const currentPrice = price[displayCurr];
    const lowerPrice = type === "coffee" ? `${currentPrice.symbol}${currentPrice.value.toFixed(2)}` : null;
    const upperIncrement = type === "coffee" ? currentPrice.increments[currentPrice.increments.length - 1] : null;
    const incrPrice = type === "coffee" ? parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value : null;
    const upperPrice = type === "coffee" ? `${currentPrice.symbol}${incrPrice.toFixed(2)}` : null;
    const layout = coffeeCardInfoLayout(media);
    return (
        <Box height="100%" width={layout.containerWidth} direction="row" align="center" justify="around" style={{position: 'relative'}}>
            {price ?
            <>
                <CardHover  >
                    <Skeleton />
                    <Skeleton />
                    <TruncateText textAlign="start" size={layout.fontSize.top} weight="bold" style={{textTransform: 'uppercase'}}>{
                    //t(`products:${type}.${slug}.name`)} - {t(`products:${type}.${slug}.country`)
                    <Skeleton />
                    }</TruncateText>
                    {/*<TruncateText textAlign="start" size={layout.fontSize.mid} color="grey">{t(`products:${type}.${slug}.taste`)}</TruncateText>
            <Text textAlign="start" weight="bold" size={layout.fontSize.bottom} color="mainDark">{`${lowerPrice} - ${upperPrice}`}</Text>*/}
                </CardHover>
                <AddToCart productId={id} currency={currency} absolute/>
            </>
            :
            'Loading...'
            }
        </Box>
    );
};

export default withTranslation()(withResponsive(CoffeeCardInfo));
