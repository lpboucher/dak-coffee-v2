import React, { lazy, Suspense } from 'react';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionDescription from '../presentation/subscriptions/SubscriptionDescription';

const SubscriptionSpecs = lazy(() => import('../presentation/subscriptions/SubscriptionSpecs'));
const SubscriptionContainer = lazy(() => import('../containers/subscriptions/SubscriptionsContainer'));
const RelatedContainer = lazy(() => import('../containers/related/RelatedContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1568042393/Heros/SubscriptionHeader_ikwigv.jpg'

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
        <Suspense fallback={<Loader />}>
            <SubscriptionSpecs />
            <SubscriptionContainer />
            <RelatedContainer relatedSlug="related_subscription"/>
            <NewsletterContainer />
        </Suspense> 
    </>
    );
};

export default Subscription;