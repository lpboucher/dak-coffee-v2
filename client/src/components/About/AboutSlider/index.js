import React from 'react';
import { useTranslation } from 'react-i18next';

import HeroSliderLayout from '../../../layouts/HeroSlider';
import FullSlideLayout from '../../../layouts/HeroSlider/FullSlide';

const ContactSlider = () => {
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
            slideImg="Heros/HeaderAbout_nclnqv"
          />,
        ]
      }
      />
    );
};

export default ContactSlider;
