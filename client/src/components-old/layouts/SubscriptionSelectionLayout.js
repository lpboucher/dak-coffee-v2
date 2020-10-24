import React from 'react';

import TwoColLayout from './TwoColLayout';
import SubscriptionSelection from '../presentation/subscriptions/SubscriptionSelection';
import CloudImage from '../utils/CloudImage';

const introImg = "Intros/BoxShipping_2_mgcqjw.png";

const SubscriptionSelectionLayout = () => {
    const img = <CloudImage img={introImg} maxWidth={720} fit="contain"/>
    return (
        <TwoColLayout
            bgColor="lightGrey"
            right={img}
            left={<SubscriptionSelection />}
        />
    );
};

export default SubscriptionSelectionLayout;
