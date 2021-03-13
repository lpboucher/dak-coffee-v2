import React from 'react';
import styled from 'styled-components';

import CloudImage from '../../../utils/images/CloudImage';

import { Stack, Box, Heading, Text } from 'grommet';

import { layout } from '../../../layout';

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

const SlideText = styled(Text)`
  line-height: 38px;
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
        <Box key={`itemId-${index}`} pad="medium" justify="around">
          <SlideHeading responsive={false} size="xlarge" color={textColor} margin={{bottom: "medium"}}>{title}</SlideHeading>
          <SlideText responsive={false} weight={500} size="xlarge" color={textColor} margin={{bottom: "medium"}}>{text}</SlideText>
          {button && button}
        </Box>
        ))}
      </SliderContent>
      </Stack>
    </Box>
  );
};

export default FullSlideLayout;
