import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const introImg = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1579957755/Intros/BoxShipping_igg0f9.png";

const SubscriptionIntro = ({currency}) => {
    const prices = {EUR: '€25', CAD: '$35'}
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
            right={<FullImg imgLink={introImg} size="contain"/>}
            left={intro}
        />
    );
};

export default SubscriptionIntro;