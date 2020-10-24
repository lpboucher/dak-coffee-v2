import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box } from 'grommet';

import { layout } from '../../../layout';

const {
  productColumnWidth,
  productColumnWidth_small,
  productFeatureHeight,
  productFeatureHeight_extraSmall,
  productFeatureSpacing
} = layout;

const DetailsHalf = styled(Box)`
  order: ${({order, isReversed}) => !isReversed ? order : order * -1};
`;

const SingleProductLayout = ({feature, productDetails}) => {
  const { mediaType, lessThan } = useResponsive();
  return (
    <Box direction="row" wrap>
        <DetailsHalf
          height={lessThan.small ? productFeatureHeight_extraSmall : productFeatureHeight}
          width={lessThan.medium ? productColumnWidth_small : productColumnWidth}
          order={lessThan.medium ? 2 : 1}
        >
          <Box pad={layout[`productFeatureSpacing_${mediaType}`] || productFeatureSpacing}>
            {feature}
          </Box>
        </DetailsHalf>
        <DetailsHalf
          width={lessThan.medium ? productColumnWidth_small : productColumnWidth}
          order={lessThan.medium ? 1 : 2}
        >
          {productDetails}
        </DetailsHalf>
    </Box>
  );
};

export default SingleProductLayout;
