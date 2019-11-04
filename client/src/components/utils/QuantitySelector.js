import React from 'react';

import { Box, Text } from 'grommet';
import { Add, Subtract } from 'grommet-icons';

const QuantitySelector = ({id, update, quantity}) => {
    return (
        <>
            <Box onClick={() => update(id, {quantity: quantity + 1})}>
                <Add size="small" style={{margin: '10px', cursor: 'pointer'}}/>
            </Box>
            <Text>{quantity}</Text>
            <Box onClick={() => update(id, {quantity: quantity - 1})}>
                <Subtract size="small" style={{margin: '10px', cursor: 'pointer'}}/>
            </Box>
        </>
    )
};

export default QuantitySelector;