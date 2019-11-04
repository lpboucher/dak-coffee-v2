import React from 'react';

import { Image, Text, Box } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

import FullWidthEvenRowLayout from '../../layouts/FullWidthEvenRowLayout';

const CartSummaryItem = ({image, name, quantity, price, currency}) => {
    const imageSRC = buildImageUrl(`Products/Thumbs/${image}`, 'product_cart_summary');
    const displayCurr = currency.toLowerCase()
    return (
        <FullWidthEvenRowLayout height={'80px'}>
            <Box width="25%" height="100%">
                <Image fit="contain" src={imageSRC} alt={name}/>
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