import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Button } from 'grommet';

import HeroSliderLayout from '../../layouts/HeroSlider';
import SingleSlideLayout from '../../layouts/HeroSlider/SingleSlide';
import AddToCart from '../Cart/AddProduct';

//const header = navigator.userAgent !== 'ReactSnap' ? 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto/v1565717609/Heros/DaybedHeader_bkct6u.jpg' : '';

const SlideButton = styled(Button)`
  width: fit-content;
`

const HeroSlider = () => {
  const history = useHistory();
    return (
      <HeroSliderLayout
        slides={
        [
          <SingleSlideLayout
            key="1"
            content={[
              {
                text: "Summer limited edition available!",
                button: <SlideButton onClick={() => history.push("/shop")} primary label="Shop our coffees" />
              },
              {
                text: "Feeling adventurous...",
                button: <AddToCart
                        productId="5da6eee61fd1fc4a0098b2de"
                        addButton={
                          <SlideButton primary label="Add mystery coffee to cart +" />
                        } />
              }
            ]}
            slideImg="Heros/_20_13_DCR_Illustration4_trnh3q"
          />
        ]
      }
      />
    );
};

export default HeroSlider;
