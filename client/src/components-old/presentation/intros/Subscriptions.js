import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const introImg = "Intros/Subscription_2_khqtab.png";
const mobileImg = "Heros/Header_subscription_lmfxp5.jpg";

const SubscriptionIntro = ({currency, media}) => {
    const prices = {EUR: '€23', CAD: '$37'};
    const isMobile = media === "extraSmall" || media === "small";
    const intro =
        <IntroLayout
            heading="intros.subscription.title"
            snap="intros.subscription.short description"
            summaryText="intros.subscription.helper"
            ctaLabel="intros.subscription.button"
            link="/subscriptions"
            options={{ price: prices[currency] }}
        />
    const img = <CloudImage img={introImg} maxWidth={575} fit="contain" padding="24px 48px"/>
    const mobileimg = <CloudImage img={mobileImg} maxWidth={575} fit="cover"/>
    const subIntro = <TwoColLayout
                        bgColor="darkGrey"
                        right={isMobile ? intro : img}
                        left={isMobile ? mobileimg : intro}
                        pad={{outer: "large", inner:{horizontal: "large", vertical: "medium"}}}
                        noPad={isMobile}
                    />
    return (
        subIntro
    );
};

export default withResponsive(SubscriptionIntro);
