import React from 'react';

import { Box, Text } from 'grommet';

const CartQuantity = ({quantity}) => {
    return (
        <Box
            background="darkHighlight"
            pad={{ horizontal: 'xsmall' }}
            round
        >
            <Text size="xsmall">{quantity}</Text>
        </Box>
    );
};

export default CartQuantity;