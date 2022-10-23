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
  background: ${({theme}) => theme.global.colors.secondaryGrey};
  border-color: ${({theme}) => theme.global.colors.secondaryGrey};
  color: ${({theme}) => theme.global.colors.mainDark};;
`

const HeroSlider = () => {
  const { t } = useTranslation();
  const history = useHistory();
    return (
      <HeroSliderLayout
      //full or half
        size="full"
        slides={
        [
          <FullSlideLayout
            key="1"
            textColor="mainWhite"
            content={[
              {
                title: "",
                text: t("slides.dak-introduction.title"),
                button: <SlideButton onClick={() => history.push("/shop")} label={t("shop.all")}/>,
                target: "/shop"
              },
            ]}
            slideImg="Heros/NewHeaderWebsite_r03hyu"
          />,
          /*<SingleSlideLayout
            key="2"
            background="#EFECD9"
            textColor="mainDark"
            content={[
              {
                title: t("slides.limited-edition.title"),
                text: t("slides.limited-edition.text"),
                button: <SlideButton onClick={() => history.push("/shop/coffee/nitro-coffee-black")} primary label={t("shop.one-can")} />,
                target: "/shop/coffee/nitro-coffee-black"
              },
            ]}
            slideImg="Heros/ColdBrew_webshop_qrvg2u"
          />,*/
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
        ]
      }
      />
    );
};

export default HeroSlider;
