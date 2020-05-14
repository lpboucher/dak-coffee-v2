import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";

import { Box, Image } from 'grommet';
import { ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

const header = navigator.userAgent !== 'ReactSnap' ? 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto/v1565717609/Heros/DaybedHeader_bkct6u.jpg' : '';

const Prev = styled(Arrow)`
  margin: 0 10px;
  transform: rotate(180deg);
  left: 0;
  z-index: 10;
`

const Next = styled(Arrow)`
  margin: 0 10px;
  right: 0;
  z-index: 10;
`

const HeroSliderLayout = ({slides, ...settings}) => {
    const slideSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Next />,
        prevArrow: <Prev />,
        ...settings
    };
    return (
      <Box height="100vh" width="100vw">
        <Slider {...slideSettings}>
          <Image fit="cover" src={header}/>
          <Image fit="cover" src={header}/>
          <Image fit="cover" src={header}/>
        </Slider>
      </Box>
    );
};

export default HeroSliderLayout;
