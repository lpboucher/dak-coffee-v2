import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import Wholesale from '../presentation/intros/Wholesale';

const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1575303121/Heros/Header_wholesalenew_puymio.jpg';

const WholesalePage = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
    <SEO canon="https://www.dakcoffeeroasters.com/wholesale" />
    {isNotSmall &&
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.wholesale",
                loc: "bottom-right",
                height: "50vh",
                width: "50vw",
                withOpacity: false
            }}
        />
    }
        <Wholesale />
        <Suspense fallback={<Loader />}>
            <NewsletterContainer />
        </Suspense>
    </>
    );
};

export default withResponsive(WholesalePage);
