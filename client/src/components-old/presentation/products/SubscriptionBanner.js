import React from 'react';
import { withTranslation } from 'react-i18next';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const thumb = 'Intros/BoxShipping_2_mgcqjw.png';

const SubscriptionBanner = ({isMobile, currency, t}) => {
    const prices = {EUR: '€23', CAD: '$37'}
    const intro =
        <IntroLayout
            heading="intros.subscription.title"
            subHeading="intros.subscription.helper"
            description="intros.subscription.short description"
            btnLabel="intros.subscription.button"
            link="/subscriptions"
            isSmall={true}
            options={{ price: prices[currency] }}
        />
    const img = <CloudImage img={thumb} maxWidth={400} maxHeight={"250px"} minHeight={isMobile ? 400 : null} fit="contain"/>
    return (
        <TwoColLayout
            bgColor="darkGrey"
            left={img}
            right={intro}
            pad={{outer: "small", inner: "medium"}}
        />
    );
};

export default withTranslation()(SubscriptionBanner);
