import React from 'react';

import { Box, Text } from 'grommet';

const OrderSummaryItemLayout = ({label, price}) => {
    return (
        <Box width="100%" direction="row" justify="end" >
            <Box width="200px"><Text textAlign="end">{label}</Text></Box>
            <Box width="100px"><Text textAlign="end">{price}</Text></Box>
        </Box>
    );
};

export default OrderSummaryItemLayout;