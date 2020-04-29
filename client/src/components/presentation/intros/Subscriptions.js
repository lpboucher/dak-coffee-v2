import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const introImg = "Intros/Subscription_2_khqtab.png";

const SubscriptionIntro = ({currency}) => {
    const prices = {EUR: '€23', CAD: '$37'}
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
    return (
        <TwoColLayout
            bgColor="darkGrey"
            right={img}
            left={intro}
            pad={{outer: "large", inner:{horizontal: "large", vertical: "medium"}}}
        />
    );
};

export default SubscriptionIntro;
