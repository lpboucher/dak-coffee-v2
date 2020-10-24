import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import Ethics from '../presentation/intros/Ethics';

const Coffee = lazy(() => import('../presentation/intros/Coffee'));
const Packaging = lazy(() => import('../presentation/intros/Packaging'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'Heros/Header_Ourcoffee_jzxkoe.jpg';

const CoffeePage = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com/our-coffee" />
        { isNotSmall &&
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.coffee",
                loc: "right",
                height: "50vh",
                width: "50vw",
                withOpacity: false,
                justify: "start"
            }}
        />
        }
        <Ethics />
        <Suspense fallback={<Loader />}>
            <Coffee />
            <Packaging />
            <NewsletterContainer />
        </Suspense>
    </>
    );
};

export default withResponsive(CoffeePage);
