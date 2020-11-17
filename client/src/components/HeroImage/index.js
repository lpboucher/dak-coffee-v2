import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box } from 'grommet';

import FullSlideLayout from '../../layouts/HeroSlider/FullSlide';

import { layout } from '../../layout';

const HeroImage = ({imageFile, overlayTitle, overlayText}) => {
  const { t } = useTranslation();
  const boxHeight = `calc(85vh - ${layout.topOffset})`;
  return (
    <Box height={boxHeight}>
      <FullSlideLayout
          textColor="white"
          content={[
            {
              title: t(overlayTitle),
              text: t(overlayText),
            },
          ]}
          slideImg={`Heros/${imageFile}`}
          imageFit="cover"
      />
    </Box>
  );
};

export default HeroImage;
