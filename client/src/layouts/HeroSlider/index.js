import React from 'react';
import { useResponsive } from '../../hooks/utils/useResponsive';

import SliderLayout from '../Share/Slider';

import { layout } from '../../layout';

const HeroSliderLayout = ({slides, size}) => {
  const { greaterThan } = useResponsive();
  return (
    <>
      {greaterThan.small &&
        <SliderLayout size={layout[`${size}SliderHeight`]}>
          {slides.map(slide => slide)}
        </SliderLayout>
      }
    </>
  );
};

export default HeroSliderLayout;
