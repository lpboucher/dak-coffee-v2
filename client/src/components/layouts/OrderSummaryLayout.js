import React from 'react';

import { Box } from 'grommet';

const OrderSummaryLayout = ({children}) => {
    return (
        <Box>          
            <Box margin={{horizontal: 'xlarge'}} width="300px" direction="column" alignSelf="end">
                {children.map(item => item)}
            </Box>
        </Box>
    );
};

export default OrderSummaryLayout;