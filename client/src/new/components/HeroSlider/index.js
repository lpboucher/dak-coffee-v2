import React from 'react';

import { Image } from 'grommet';

import HeroSliderLayout from '../../layouts/HeroSlider';

const header = navigator.userAgent !== 'ReactSnap' ? 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto/v1565717609/Heros/DaybedHeader_bkct6u.jpg' : '';

const HeroSlider = () => {

    return (
      <HeroSliderLayout
        slides={
        [
          <Image fit="cover" src={header}/>,
          <Image fit="cover" src={header}/>,
          <Image fit="cover" src={header}/>
        ]
      }
      />
    );
};

export default HeroSlider;
