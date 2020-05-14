import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box } from 'grommet';

import { layout } from '../../../../layout'

const ProductCardLayout = ({feature, info, linkTarget, isClickable}) => {
  const history = useHistory();
  return (
    <Box width="33%" height={layout.cardHeight} pad="small">
        <Box height={layout.cardTop} width="100%" onClick={() => isClickable ? history.push(linkTarget) : null}>
            {feature}
        </Box>
        <Box width="100%">
            {info}
        </Box>
    </Box>
  );
}

export default ProductCardLayout;


