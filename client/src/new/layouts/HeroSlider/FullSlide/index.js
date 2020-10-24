import React from 'react';
import styled from 'styled-components';

import CloudImage from '../../../utils/images/CloudImage';

import { Stack, Box, Heading, Text } from 'grommet';

import { layout } from '../../../../layout';

const {
  fullSlideTextWidth,
} = layout;

const SliderContent = styled(Box)`
  order: ${({order}) => order};
`;

const SlideHeading = styled(Heading)`
  text-transform: inherit;
  letter-spacing: 1.2px;
`;

const FullSlideLayout = ({content, slideImg, imageFit="cover", background="secondary", textColor="black"}) => {
  return (
    <Box fill background={background}>
      <Stack fill>
        <CloudImage
          fit={imageFit}
          img={slideImg}
          maxWidth={1400}
        />
        <SliderContent fill="vertical" width={fullSlideTextWidth} justify="center" pad="large" order={1}>
        {content.map(({title, text, button}, index) => (
        <Box key={`itemId-${index}`} pad="medium" fill justify="around">
          <SlideHeading responsive={false} size="xlarge" color={textColor}>{title}</SlideHeading>
          <Text responsive={false} size="xlarge" color={textColor}>{text}</Text>
          {button}
        </Box>
        ))}
      </SliderContent>
      </Stack>
    </Box>
  );
};

export default FullSlideLayout;
