import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import Wholesale from '../presentation/intros/Wholesale';

const PrivateLabel = lazy(() => import('../presentation/intros/PrivateLabel'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717621/Heros/Header_Wholesale_wtchcg.jpg';

const WholesalePage = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
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
            <PrivateLabel />
            <NewsletterContainer />
        </Suspense> 
    </>
    );
};

export default withResponsive(WholesalePage);