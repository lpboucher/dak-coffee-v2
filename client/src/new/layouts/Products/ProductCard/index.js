import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Box } from 'grommet';

import { layout } from '../../../../layout';

const Feature = styled(Box)``;

const CardMedallion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

const CardContainer = styled(Box)`
  position: relative;

  &:nth-child(6n+1), &:nth-child(6n+2), &:nth-child(6n+3) {
    > ${Feature} {
      background: #f7f6f4;
    }
  }

  &:nth-child(6n+4), &:nth-child(6n+5), &:nth-child(6n+6) {
    > ${Feature} {
      background: #dddfde;
    }
  }

  &:hover {
    > ${CardMedallion} {
      animation: roll 3s infinite;
    }
  }

  @keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const ProductCardLayout = ({feature, info, linkTarget, isClickable, medallion=null}) => {
  const history = useHistory();
  return (
    <>
    <CardContainer width="33%" height={layout.cardHeight} pad="small">
        <Feature height={layout.cardTop} width="100%" onClick={() => isClickable ? history.push(linkTarget) : null}>
            {feature}
        </Feature>
        {info &&
        <Box width="100%">
            {info}
        </Box>
        }
        {medallion &&
        <CardMedallion>
          {medallion}
        </CardMedallion>
        }
    </CardContainer>
    </>
  );
}

export default ProductCardLayout;


