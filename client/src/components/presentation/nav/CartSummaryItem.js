import React from 'react';

import { Text, Box } from 'grommet';
import CloudImage from '../../utils/CloudImage';

import FullWidthEvenRowLayout from '../../layouts/FullWidthEvenRowLayout';

const CartSummaryItem = ({image, name, quantity, price, currency}) => {
    const displayCurr = currency.toLowerCase()
    return (
        <FullWidthEvenRowLayout height={'80px'}>
            <Box width="25%" height="100%">
                <CloudImage img={`Products/Thumbs/${image}`} maxWidth={100} fit="contain"/>
            </Box>
            <Box width="25%">
                <Text textAlign="center" size="small">{name}</Text>
            </Box>
            <Box width="25%">
                <Text textAlign="center" size="small">{`${quantity} x`}</Text>
            </Box>
            <Box width="25%">
                <Text textAlign="center" size="small">{`${price[displayCurr].symbol}${price.unit.toFixed(2)}`}</Text>
            </Box>
        </FullWidthEvenRowLayout>
    );
};

export default CartSummaryItem;
