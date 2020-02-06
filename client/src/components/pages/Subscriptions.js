import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getDisplayCurrency } from '../../ducks/views';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionPageIntro from '../presentation/intros/SubscriptionPage';
import SubscriptionSelectionLayout from '../layouts/SubscriptionSelectionLayout';

const SubscriptionContainer = lazy(() => import('../containers/subscriptions/SubscriptionsContainer'));
const RelatedContainer = lazy(() => import('../containers/related/RelatedContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1580997312/Heros/Header_Subscription_lcfz3j.jpg'

const Subscription = () => {
    const currency = useSelector(state => getDisplayCurrency(state));
    const prices = {EUR: '€22', CAD: '$40'};
    return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com/subscriptions" />
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.subscription",
                loc: "left",
                height: "50vh",
                width: "40vw",
                cta: "hero.cta.subscription",
                options: { price: prices[currency] }
            }}
            ctaLink='/shop'
        />
        <SubscriptionPageIntro />
        <SubscriptionSelectionLayout />
        <Suspense fallback={<Loader />}>
            <SubscriptionContainer />
            <RelatedContainer relatedSlug="related_subscription"/>
            <NewsletterContainer />
        </Suspense> 
    </>
    );
};

export default Subscription;