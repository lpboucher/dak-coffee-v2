import React from 'react';

import TwoColLayout from './TwoColLayout';
import FullImg from '../utils/FullImg';
import SubscriptionSelection from '../presentation/subscriptions/SubscriptionSelection';

const introImg = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1580466638/Intros/BoxShipping_2_mgcqjw.png";

const SubscriptionSelectionLayout = () => {
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            right={<FullImg imgLink={introImg} size="contain"/>}
            left={<SubscriptionSelection />}
        />
    );
};

export default SubscriptionSelectionLayout;