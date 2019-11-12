import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import Hero from '../presentation/global/Hero';
import Ethics from '../presentation/intros/Ethics';
import Coffee from '../presentation/intros/Coffee';
import Packaging from '../presentation/intros/Packaging';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565717617/Heros/Header_Ourcoffee_jzxkoe.jpg';

const CoffeePage = ({media}) => {
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <>
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
        <Coffee />
        <Packaging />
        <NewsletterContainer />
    </>
    );
};

export default withResponsive(CoffeePage);