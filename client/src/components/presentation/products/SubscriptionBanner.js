import React from 'react';
import { withTranslation } from 'react-i18next';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const thumb = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1572972636/Intros/BoxShipping_2_mgcqjw.png';

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
    return (
        <TwoColLayout
            bgColor="darkGrey"
            left={<FullImg imgLink={thumb} withMinHeight={isMobile} size="contain"/>}
            right={intro}
            pad={{outer: "small", inner: "medium"}}
        />
    );
};

export default withTranslation()(SubscriptionBanner);
