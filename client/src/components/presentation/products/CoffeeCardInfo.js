import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Text } from 'grommet';

const CoffeeCardInfo = ({id, slug, type, price, currency, t}) => {
    const displayCurr = currency.toLowerCase();
    const currentPrice = price[displayCurr];
    const lowerPrice = `${currentPrice.symbol} ${currentPrice.value.toFixed(2)}`;
    const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
    const incrPrice = parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;
    const upperPrice = `${currentPrice.symbol} ${incrPrice.toFixed(2)}`;
    return (
        <>
            {price ?
            <>
                <Box flex="grow">
                    <Text textAlign="center" weight="bold" style={{textTransform: 'uppercase'}}>{t(`products:${type}.${slug}.name`)} - {t(`products:${type}.${slug}.country`)}</Text>
                    <Text textAlign="center" color="grey">{t(`products:${type}.${slug}.taste`)}</Text>
                    <Text textAlign="center" color="grey">{`${lowerPrice} - ${upperPrice}`}</Text>
                </Box>
            </>
            :
            'Loading...'
            }
        </>
    );
};

export default withTranslation()(CoffeeCardInfo);