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

            {/*<div className="snipcart-summary">
                <span className="snipcart-total-items"></span>
            </div>*/}
        </Box>
    );
};

export default CartQuantity;