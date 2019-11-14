import React from 'react';

import Hero from '../presentation/global/Hero';
import SubscriptionDescription from '../presentation/subscriptions/SubscriptionDescription';
import SubscriptionSpecs from '../presentation/subscriptions/SubscriptionSpecs';
import SubscriptionContainer from '../containers/subscriptions/SubscriptionsContainer';
import RelatedContainer from '../containers/related/RelatedContainer';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/v1568042393/Heros/SubscriptionHeader_ikwigv.jpg'

const Subscription = () => {
    return (
    <>
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.subscription",
                loc: "bottom-left",
                height: "50vh"
            }}
        />
        <SubscriptionDescription />
        <SubscriptionSpecs />
        <SubscriptionContainer />
        <RelatedContainer relatedSlug="related_subscription"/>
        <NewsletterContainer />
    </>
    );
};

export default Subscription;