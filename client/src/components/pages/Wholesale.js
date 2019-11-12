import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Wholesale from '../presentation/intros/Wholesale';
import PrivateLabel from '../presentation/intros/PrivateLabel';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

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
        <PrivateLabel />
        <NewsletterContainer />
    </>
    );
};

export default withResponsive(WholesalePage);