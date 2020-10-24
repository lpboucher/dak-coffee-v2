import React from 'react';
import { useResponsive } from '../../hooks/utils/useResponsive';

import SliderLayout from '../Share/Slider';

const HeroSliderLayout = ({slides}) => {
  const { greaterThan } = useResponsive();
  return (
    <>
      {greaterThan.small &&
        <SliderLayout>
          {slides.map(slide => slide)}
        </SliderLayout>
      }
    </>
  );
};

export default HeroSliderLayout;
