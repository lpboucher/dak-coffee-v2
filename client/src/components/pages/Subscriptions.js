import React from 'react';

import Hero from '../presentation/global/Hero';
import SubscriptionDescription from '../presentation/subscriptions/SubscriptionDescription';
import SubscriptionSpecs from '../presentation/subscriptions/SubscriptionSpecs';
import SubscriptionContainer from '../containers/subscriptions/SubscriptionsContainer';
//import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
//import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

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
        {/*<CategoryRowContainer name="You may also like" category='coffee-equipment' limit={3}/>
        <NewsletterContainer />*/}
    </>
    );
};

export default Subscription;