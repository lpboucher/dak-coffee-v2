import React from 'react';
import styled from 'styled-components';

import { Box } from 'grommet'
import { ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

import SliderLayout from '../Share/Slider';

import { layout } from '../../../layout';

const SliderContainer = styled(Box)`
  & .slick-slider,
  & .slick-list {
    height: 100%
  }
`

const HeroSliderLayout = ({slides}) => {
    const boxHeight = `calc(100vh - ${layout.topOffset})`;
    const slideSettings = {dots: true}
    return (
      <SliderContainer height={boxHeight}>
        <SliderLayout {...slideSettings}>
          {slides.map(slide => slide)}
        </SliderLayout>
      </SliderContainer>
    );
};

export default HeroSliderLayout;
