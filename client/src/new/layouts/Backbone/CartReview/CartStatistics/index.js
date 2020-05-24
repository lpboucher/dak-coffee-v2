import React from 'react';

import { Box, Layer } from 'grommet';

const CartStatisticsLayout = ({numberOfItems, total}) => {
  return (
  <Box direction="row" fill background="mainDark" pad="xsmall" justify="center" align="center">
    {numberOfItems} | {total}
  </Box>
  )
}

export default CartStatisticsLayout;
