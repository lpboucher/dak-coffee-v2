import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

import { Box } from 'grommet';

import { layout } from '../../../layout';

const SliderContainer = styled(Box)`
  & .slick-slider,
  & .slick-list,
  & .slick-track,
  & .slick-slide,
  & .slick-slide > div {
    height: 100%;
  }

  & .slick-dots {
    bottom: -35px;
  }
`

const SliderLayout = ({children, size, ...settings}) => {
    const slideSettings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...settings
  };
    return (
      <SliderContainer height={size}>
        <Slider {...slideSettings}>
          {children}
        </Slider>
      </SliderContainer>
    );
};

export default SliderLayout;
