import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const introImg = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1580466638/Intros/Subscription_2_khqtab.png";

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
    return (
        <TwoColLayout
            bgColor="darkGrey"
            right={<FullImg imgLink={introImg} size="contain" withMinHeight={false}/>}
            left={intro}
            pad={{outer: "large", inner:{horizontal: "large", vertical: "medium"}}}
        />
    );
};

export default SubscriptionIntro;
