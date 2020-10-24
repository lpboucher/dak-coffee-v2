import React from 'react';

import CloudImage from '../../../../utils/images/CloudImage';
import { Text, Box } from 'grommet';

const CartReviewItemLayout = ({image, name, quantity, price, total}) => {
  return (
      <Box direction="row" height={'80px'} align="center" justify="around">
          <Box width="25%" height="50px">
              <CloudImage
                fit="contain"
                img={image}
                maxWidth={80}
                alt={name}
              />
          </Box>
          <Box width="25%">
              <Text textAlign="center" size="small">{`${quantity} x`}</Text>
          </Box>
          <Box width="25%">
              <Text textAlign="center" size="small">{name}</Text>
          </Box>
          <Box width="25%">
              <Text textAlign="center" size="small">{total}</Text>
          </Box>
      </Box>
  );
};

export default CartReviewItemLayout;
