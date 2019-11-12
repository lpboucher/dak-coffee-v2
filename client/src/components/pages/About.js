import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Profiles from '../presentation/intros/Profiles';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

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
        <Profiles />
        <NewsletterContainer />
    </>
    );
};

export default withResponsive(About);