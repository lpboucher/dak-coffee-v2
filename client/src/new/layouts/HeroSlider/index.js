import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../hooks/utils/useResponsive';

import { Box } from 'grommet'

import SliderLayout from '../Share/Slider';

import { layout } from '../../../layout';

const SliderContainer = styled(Box)`
  & .slick-slider,
  & .slick-list,
  & .slick-track,
  & .slick-slide,
  & .slick-slide > div {
    height: 100%
  }
`

const HeroSliderLayout = ({slides}) => {
  const { greaterThan } = useResponsive();
  const boxHeight = `calc(85vh - ${layout.topOffset})`;
  const slideSettings = {dots: true, autoplay: true};
  return (
    <>
      {greaterThan.small &&
        <SliderContainer height={boxHeight}>
          <SliderLayout {...slideSettings}>
            {slides.map(slide => slide)}
          </SliderLayout>
        </SliderContainer>
      }
    </>
  );
};

export default HeroSliderLayout;
