import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getDisplayCurrency } from '../../ducks/views';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionPageIntro from '../presentation/intros/SubscriptionPage';
import SubscriptionSelectionLayout from '../layouts/SubscriptionSelectionLayout';

const RelatedContainer = lazy(() => import('../containers/related/RelatedContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1580997312/Heros/BoxHeader_bumofc.jpg'

const Subscription = () => {
    const currency = useSelector(state => getDisplayCurrency(state));
    const prices = {EUR: '€23', CAD: '$37'};
    return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com/subscriptions" />
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.subscription",
                loc: "left",
                height: "50vh",
                width: "32vw",
                cta: "hero.cta.subscription",
                options: { price: prices[currency] }
            }}
            ctaLink='/shop'
            ctaOnPage
        />
        <SubscriptionPageIntro currency={currency} />
        <SubscriptionSelectionLayout />
        <Suspense fallback={<Loader />}>
            <RelatedContainer relatedSlug="related_subscription"/>
            <NewsletterContainer />
        </Suspense>
    </>
    );
};

export default Subscription;
