import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'grommet';
import Skeleton from 'react-loading-skeleton';

import AddToCart from '../../../containers/Cart/AddToCart';

const TruncateText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    flex-grow:1;
`

const FixedText = styled(Text)`
  width: 100px;
`

const ProductCardInfo = ({id, displayedPrice, title, subTitle, helper}) => {
    return (
        <>
          <Box direction="row" justify="between">
            <TruncateText textAlign="start" size="medium" weight="bold" >
              {title || <Skeleton />}
            </TruncateText>
            <FixedText textAlign="end">{displayedPrice}</FixedText>
          </Box>
          <Box direction="row" align="center" justify="between">
            <Box>
              <TruncateText textAlign="start" size="small" color="grey">
                {subTitle || <Skeleton />}
              </TruncateText>
              <Text textAlign="start" weight="bold" size="xsmall" color="mainDark">
                {displayedPrice || <Skeleton />}
              </Text>
            </Box>
            <AddToCart productId={id} />
          </Box>

        </>
    );
};

export default ProductCardInfo;
