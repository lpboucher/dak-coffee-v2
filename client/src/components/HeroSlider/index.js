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

/*const VideoBox = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;*/

// const videoSrc = "https://res.cloudinary.com/dak-coffee-roasters/video/upload/c_crop,f_auto,g_center,w_3820,x_0/v1600263031/Videos/STOPMOTION_2_1_lpaijn.mp4"

const HeroSlider = () => {
  const { t } = useTranslation();
  const history = useHistory();
    return (
      <HeroSliderLayout
        slides={
        [
          <FullSlideLayout
            key="1"
            textColor="black"
            content={[
              {
                title: t("slides.new-product.title"),
                text: t("slides.new-product.text"),
                button: <SlideButton onClick={() => history.push("/shop/merchandise/fresh-brew")} primary label={t("shop.product")} />,
                target: "/shop/merchandise/fresh-brew"
              },
            ]}
            slideImg="Heros/slider_candle2_zyjo08"
          />,
          <SingleSlideLayout
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
            slideImg="Heros/GiftCard_beige_t3fgte"
          />,
          /*<Box fill direction="row">
            <VideoBox autoPlay muted loop id="stopMotion">
              <source src={videoSrc} type="video/mp4" />
            </VideoBox>
          </Box>,*/
          /*<Box fill direction="row">
            <CloudImage
              fit="cover"
              img={"Heros/hero2_wqhldc"}
              maxWidth={1440}
            />
          </Box>,*/
          <FullSlideLayout
            key="3"
            textColor="white"
            content={[
              {
                title: t("slides.dak-introduction.title"),
                text: t("slides.dak-introduction.text"),
                button: <SlideButton onClick={() => history.push("/shop/coffee/connoisseur")} primary label={t("shop.all")}/>,
                target: "/shop/coffee/connoisseur"
              },
            ]}
            slideImg="Heros/Header_NewDAK_aqfvak"
          />
        ]
      }
      />
    );
};

export default HeroSlider;
