import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';

const Profiles = lazy(() => import('../presentation/intros/Profiles'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717609/Heros/Header_Aboutus_qwdlkf.jpg';

const About = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
    {isNotSmall &&
        <Hero
            bgImage={header}
            overlay={{
                text: "hero.team",
                loc: "left",
                height: "50vh",
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