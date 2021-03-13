import React from 'react';
import styled from 'styled-components';

import CloudImage from '../../../utils/images/CloudImage';

import { Box, Heading, Text } from 'grommet';

const SliderContent = styled(Box)`
  order: ${({order}) => order};
`;

const SlideHeading = styled(Heading)`
  text-transform: inherit;
  letter-spacing: 1.2px;
`;

const SingleSlideLayout = ({content, slideImg, background="secondary", textColor="black"}) => {
  return (
    <Box fill direction="row" background={background}>
      <SliderContent width="50%" justify="center" pad="large" order={1}>
        {content.map(({title, text, button}, index) => (
        <Box key={`itemId-${index}`} pad="medium" justify="around">
          <SlideHeading responsive={false} size="xlarge" color={textColor} margin={{bottom: "medium"}}>{title}</SlideHeading>
          <Text responsive={false} size="xlarge" color={textColor} margin={{bottom: "medium"}}>{text}</Text>
          {button}
        </Box>
        ))}
      </SliderContent>
      <SliderContent width="50%" justify="center" order={2}>
        <Box pad="large">
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
