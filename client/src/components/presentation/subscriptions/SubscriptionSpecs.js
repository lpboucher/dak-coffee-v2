import React from 'react';

import SpacedRowLayout from '../../layouts/SpacedRowLayout';
import SubscriptionSpecsItem from './SubscriptionSpecsItem';

import { Deliver, Java, Calendar } from 'grommet-icons';

const SubscriptionSpecs = () => {
    return (
        <SpacedRowLayout>
            <SubscriptionSpecsItem 
                key="delivery"
                icon={<Deliver />}
                header="sections.subscription.specs.shipping.title"
                desc="sections.subscription.specs.shipping.subtitle"
            />
            <SubscriptionSpecsItem
                key="choice"
                icon={<Java />}
                header="sections.subscription.specs.choice.title"
                desc="sections.subscription.specs.choice.subtitle"
            />
            <SubscriptionSpecsItem
                key="commitment"
                icon={<Calendar />}
                header="sections.subscription.specs.commitment.title"
                desc="sections.subscription.specs.commitment.subtitle"
            />
        </SpacedRowLayout>
    );
};

export default SubscriptionSpecs;