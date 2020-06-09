import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Box } from 'grommet';

import { layout } from '../../../../layout';

const Feature = styled(Box)``;

const CardContainer = styled(Box)`
  &:nth-child(6n+1), &:nth-child(6n+2), &:nth-child(6n+3) {
    > ${Feature} {
      background: red;
    }
  }

  &:nth-child(6n+4), &:nth-child(6n+5), &:nth-child(6n+6) {
    > ${Feature} {
      background: green;
    }
  }
`

const ProductCardLayout = ({feature, info, linkTarget, isClickable}) => {
  const history = useHistory();
  return (
    <CardContainer width="33%" height={layout.cardHeight} pad="small">
        <Feature height={layout.cardTop} width="100%" onClick={() => isClickable ? history.push(linkTarget) : null}>
            {feature}
        </Feature>
        <Box width="100%">
            {info}
        </Box>
    </CardContainer>
  );
}

export default ProductCardLayout;


