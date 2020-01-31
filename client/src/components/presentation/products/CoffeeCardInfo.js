import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { Box, Text } from 'grommet';

import { coffeeCardInfoLayout } from '../../layouts/globalResponsiveLayout';

export const CardHover = styled(Box)`
    &:before {
        content: "";
        display: block;
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
    const lowerPrice = `${currentPrice.symbol}${currentPrice.value.toFixed(2)}`;
    const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
    const incrPrice = parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;
    const upperPrice = `${currentPrice.symbol}${incrPrice.toFixed(2)}`;
    const layout = coffeeCardInfoLayout(media);
    return (
        <>
            {price ?
            <>
                <CardHover  >
                    <TruncateText textAlign="start" size={layout.fontSize.top} weight="bold" style={{textTransform: 'uppercase'}}>{t(`products:${type}.${slug}.name`)} - {t(`products:${type}.${slug}.country`)}</TruncateText>
                    <TruncateText textAlign="start" size={layout.fontSize.mid} color="grey">{t(`products:${type}.${slug}.taste`)}</TruncateText>
                    <Text textAlign="start" weight="bold" size={layout.fontSize.bottom} color="mainDark">{`${lowerPrice} - ${upperPrice}`}</Text>
                </CardHover>
            </>
            :
            'Loading...'
            }
        </>
    );
};

export default withTranslation()(withResponsive(CoffeeCardInfo));