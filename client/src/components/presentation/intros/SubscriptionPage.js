import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const introImg = "Intros/dakbags_xfwwrv.png";

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
    const img = <CloudImage img={introImg} maxWidth={575} fit="contain" padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="mainWhite"
            left={img}
            right={intro}
        />
    );
};

export default SubscriptionPageIntro;
