import React from 'react';

import { Box } from 'grommet';

const CartStatisticsLayout = ({numberOfItems, total}) => {
  return (
  <Box direction="row" fill background="mainDark" pad="xsmall" justify="center" align="center">
    {`${numberOfItems} items in cart`} | {total}
  </Box>
  )
}

export default CartStatisticsLayout;
