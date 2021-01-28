import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from 'grommet';

import HeroSliderLayout from '../../layouts/HeroSlider';
import SingleSlideLayout from '../../layouts/HeroSlider/SingleSlide';
import FullSlideLayout from '../../layouts/HeroSlider/FullSlide';

const SlideButton = styled(Button)`
  width: fit-content;
`

const HeroSlider = () => {
  const { t } = useTranslation();
  const history = useHistory();
    return (
      <HeroSliderLayout
        slides={
        [
          <FullSlideLayout
            key="2"
            textColor="white"
            content={[
              {
                title: t("slides.dak-introduction.title"),
                text: t("slides.dak-introduction.text"),
                button: <SlideButton onClick={() => history.push("/shop")} primary label={t("shop.all")}/>,
                target: "/shop"
              },
            ]}
            slideImg="Heros/Header2_Website_netfxv"
          />,
          /*<SingleSlideLayout
            key="2"
            background="#B2B5A4"
            textColor="black"
            content={[
              {
                title: t("slides.gift-card.title"),
                text: t("slides.gift-card.text"),
                button: <SlideButton onClick={() => history.push("/shop/promo/gift-card")} primary label={t("shop.promo")} />,
                target: "/shop/promo/gift-card"
              },
            ]}
            slideImg="Heros/GiftCard_beige2_flwgr8"
          />,*/
          <FullSlideLayout
            key="2"
            textColor="white"
            content={[
              {
                title: t("slides.dak-introduction.title"),
                text: t("slides.dak-introduction.text"),
                button: <SlideButton onClick={() => history.push("/shop")} primary label={t("shop.all")}/>,
                target: "/shop"
              },
            ]}
            slideImg="Heros/Header_Website_frfhen"
          />
        ]
      }
      />
    );
};

export default HeroSlider;
