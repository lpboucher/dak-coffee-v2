import React, { lazy, Suspense } from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';

const Contact = lazy(() => import('../presentation/intros/Contact'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717615/Heros/Header_Contactus_maq12p.jpg';

const ContactPage = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
        { isNotSmall &&
        <Hero 
            bgImage={header}
            overlay={{
                text: "hero.contact",
                loc: "bottom-right",
                height: "50vh",
                width: "50vw",
                withOpacity: false
            }}
        />
        }
        <Suspense fallback={<Loader />}>
            <Contact />
            <NewsletterContainer /> 
        </Suspense> 
        
    </>
    );
};

export default withResponsive(ContactPage);