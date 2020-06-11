import React from 'react';
import styled from 'styled-components';

import CloudImage from '../../../utils/images/CloudImage';

import { Box, Text } from 'grommet';

const SliderContent = styled(Box)`
  order: ${({order, isReversed}) => !isReversed ? order : order * -1};
`;

const SingleSlideLayout = ({content, slideImg, reversed=false}) => {
    return (
      <Box fill direction="row" background="secondary">
        <SliderContent width="50%" justify="center" pad="large" isReversed={reversed} order={1}>
          {content.map(({text, button}, index) => (
          <Box key={`itemId-${index}`} pad="medium">
            <Text>{text}</Text>
            {button}
          </Box>
          ))}
        </SliderContent>
        <SliderContent width="50%" justify="center" isReversed={reversed} order={2}>
          <Box pad="xlarge">
            <CloudImage
              fit="contain"
              img={slideImg}
              maxWidth={720}
            />
          </Box>
        </SliderContent>
      </Box>
    );
};

export default SingleSlideLayout;
