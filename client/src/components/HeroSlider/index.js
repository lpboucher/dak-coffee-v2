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
          /*<SingleSlideLayout
            key="1"
            background="#ECEAE5"
            content={[
              {
                title: "Bringing outstanding flavors to your cup.",
                text: "Here to make your coffee time memorable.",
                button: <SlideButton onClick={() => history.push("/shop")} primary label="Shop our coffees" />
              },
            ]}
            slideImg="Heros/newwebsitelogo_bwydew"
          />,*/
          <SingleSlideLayout
            key="1"
            background="#C08685"
            textColor="white"
            content={[
              {
                title: t("slides.limited-edition.title"),
                text: t("slides.limited-edition.text"),
                button: <SlideButton onClick={() => history.push("/shop/coffee/connoisseur-coffee")} primary label={t("shop.one")} />,
                target: "/shop/coffee/connoisseur-coffee"
              },
            ]}
            slideImg="Heros/fancy_new_mwcomt"
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
            key="2"
            textColor="white"
            content={[
              {
                title: t("slides.dak-introduction.title"),
                text: t("slides.dak-introduction.text"),
                button: <SlideButton onClick={() => history.push("/shop/coffee/connoisseur-coffee")} primary label={t("shop.all")}/>,
                target: "/shop/coffee/connoisseur-coffee"
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
