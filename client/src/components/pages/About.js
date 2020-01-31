import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';

const Profiles = lazy(() => import('../presentation/intros/Profiles'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565896327/Heros/HeaderV2_gujmqi.jpg';

const About = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
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