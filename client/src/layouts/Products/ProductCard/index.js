import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box } from 'grommet';

import { layout } from '../../../layout';

const {
  cardHeight,
  cardTop,
  cardWidth,
  cardMargin
} = layout;

const Feature = styled(Box)``;

const CardInfo = styled(Box)`
  padding: 20px 0 0;
`;

const CardMedallion = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`

const CardContainer = styled(Box)`
  position: relative;

  & > ${Feature} {
      background: ${({background}) => background};
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

const ProductCardLayout = ({feature, info, linkTarget, isClickable, background="#f7f6f4", medallion=null}) => {
  const history = useHistory();
  const { mediaType } = useResponsive();
  return (
    <>
    <CardContainer
      width={layout[`cardWidth_${mediaType}`] || cardWidth}
      height={cardHeight}
      pad="small"
      margin={layout[`cardMargin_${mediaType}`] || cardMargin}
    >
        <Feature background={background} height={cardTop} width="100%" onClick={() => isClickable ? history.push(linkTarget) : null}>
            {feature}
        </Feature>
        {info &&
        <CardInfo width="100%">
            {info}
        </CardInfo>
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


