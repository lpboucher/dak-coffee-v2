import React from 'react';

import { Box } from 'grommet';

const CartReviewListLayout = ({children}) => {
    return (
    <Box
      justify="between"
      background="mainWhite"
      animation="slideUp"
      >
        {children}
    </Box>
    );
};

export default CartReviewListLayout;
