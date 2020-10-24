import React from 'react';
import styled from 'styled-components';

import { Box } from 'grommet';

const ReviewDrawer = styled(Box)`
  border-radius: 20px 20px 0 0;
  box-shadow: 10px -10px 20px 0px rgba(52,52,52,0.5);
`;

const CartReviewListLayout = ({children}) => {
    return (
    <ReviewDrawer
      justify="between"
      background="mainWhite"
      >
        {children}
    </ReviewDrawer>
    );
};

export default CartReviewListLayout;
