import React from 'react';

import TwoCardLayout from '../../layouts/TwoCardLayout';
import SingleSubscriptionContainer from '../../containers/subscriptions/SingleSubscriptionContainer';

const SubscriptionsDetails = ({subscriptionIds}) => {
    return (
        <TwoCardLayout>
            {subscriptionIds.map(id => <SingleSubscriptionContainer key={id} subscriptionId={id}/>)}
        </TwoCardLayout>
    );
};

export default SubscriptionsDetails;