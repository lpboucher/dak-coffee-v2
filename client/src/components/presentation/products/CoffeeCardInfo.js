import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Box, Text } from 'grommet';

export const CardHover = styled(Box)`
    border-top: 1px solid #444444;
    margin: 12px;
`

const TruncateText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

const CoffeeCardInfo = ({id, slug, type, price, currency, t}) => {
    const displayCurr = currency.toLowerCase();
    const currentPrice = price[displayCurr];
    const lowerPrice = `${currentPrice.symbol}${currentPrice.value.toFixed(2)}`;
    const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
    const incrPrice = parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;
    const upperPrice = `${currentPrice.symbol}${incrPrice.toFixed(2)}`;
    return (
        <>
            {price ?
            <>
                <CardHover flex="grow" >
                    <TruncateText textAlign="start" weight="bold" style={{textTransform: 'uppercase'}}>{t(`products:${type}.${slug}.name`)} - {t(`products:${type}.${slug}.country`)}</TruncateText>
                    <TruncateText textAlign="start" size="xsmall" color="grey">{t(`products:${type}.${slug}.taste`)}</TruncateText>
                    <Text textAlign="start" weight="bold" size="small" color="mainDark">{`${lowerPrice} - ${upperPrice}`}</Text>
                </CardHover>
            </>
            :
            'Loading...'
            }
        </>
    );
};

export default withTranslation()(CoffeeCardInfo);