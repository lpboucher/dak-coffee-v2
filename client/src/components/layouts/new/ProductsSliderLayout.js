import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";

import { Box } from 'grommet';
import { ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

const Prev = styled(Arrow)`
  margin: 0 10px;
  transform: rotate(180deg);
`

const Next = styled(Arrow)`
  margin: 0 10px;
`

const ProductSliderLayout = ({slides, ...settings}) => {
    const slideSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Next />,
        prevArrow: <Prev />,
        ...settings
    };
    return (
      <Box pad="medium">
        <Slider {...slideSettings}>
        {slides}
        </Slider>
      </Box>
    );
};

export default ProductSliderLayout;
