import React from 'react';

import { Box } from 'grommet';

const CartReviewListLayout = ({children}) => {
    return (
    <Box
      justify="between"
      background="mainWhite"
      >
        {children}
    </Box>
    );
};

export default CartReviewListLayout;
