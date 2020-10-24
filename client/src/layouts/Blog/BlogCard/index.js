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
} = layout;

const Feature = styled(Box)``;

const CardInfo = styled(Box)`
  padding: 20px 0 0;
`;

const CardContainer = styled(Box)`
  position: relative;
`

const BlogCardLayout = ({feature, info, linkTarget, isClickable}) => {
  const history = useHistory();
  const { mediaType } = useResponsive();
  return (
    <>
    <CardContainer
      width={layout[`cardWidth_${mediaType}`] || cardWidth}
      height={cardHeight} pad="small"
    >
        <Feature height={cardTop} width="100%" onClick={() => isClickable ? history.push(linkTarget) : null}>
            {feature}
        </Feature>
        {info &&
        <CardInfo width="100%">
            {info}
        </CardInfo>
        }
    </CardContainer>
    </>
  );
}

export default BlogCardLayout;


