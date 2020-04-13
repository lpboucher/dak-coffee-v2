import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';

const Profiles = lazy(() => import('../presentation/intros/Profiles'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565896327/Heros/BlacktableHeader_jfgusd.jpg';

const About = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com/about" />
    {isNotSmall &&
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.team",
                loc: "bottom-left",
                height: "30vh",
                width: "50vw",
                withOpacity: false,
                justify: "start"
            }}
        />
    }
    <Suspense fallback={<Loader />}>
        <Profiles />
        <NewsletterContainer />
    </Suspense>
    </>
    );
};

export default withResponsive(About);
