import React from 'react';
import { useTranslation } from 'react-i18next';

import HeroSliderLayout from '../../../layouts/HeroSlider';
import FullSlideLayout from '../../../layouts/HeroSlider/FullSlide';

const SustainabilitySlider = () => {
  const { t } = useTranslation();
    return (
      <HeroSliderLayout
      size="half"
        slides={
        [
          <FullSlideLayout
            key="1"
            textColor="mainWhite"
            content={[
              {
                title: "",
                text: t("slides.dak-introduction.title"),
              },
            ]}
            slideImg="Heros/sustainability_lnwo3y"
          />,
        ]
      }
      />
    );
};

export default SustainabilitySlider;
