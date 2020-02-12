import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const introImg = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1580998386/Intros/dakbags_xfwwrv.png";

const SubscriptionPageIntro = ({currency='EUR'}) => {
    const prices = {EUR: '€23', CAD: '$37'}
    const intro = 
        <IntroLayout 
            heading="intros.subscriptionPage.title" 
            snap="intros.subscriptionPage.short description"
            alert="intros.subscriptionPage.alert"
            summaryText="intros.subscriptionPage.helper"
            ctaLabel="intros.subscriptionPage.button"
            ctaOnPage
            link="/subscriptions"
            options={{ price: prices[currency] }}
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            left={<FullImg imgLink={introImg} size="contain"/>}
            right={intro}
        />
    );
};

export default SubscriptionPageIntro;