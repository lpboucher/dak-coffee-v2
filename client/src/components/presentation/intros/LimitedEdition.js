import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const limited = 'Intros/milehighillustration_ehbosh.png';

const LimitedEditionsIntro = () => {
    const intro =
        <IntroLayout
            heading="intros.limited edition.title"
            subHeading="intros.limited edition.soldOut"
            snap="intros.limited edition.description"
            ctaLabel="intros.limited edition.button"
            link="/shop"
        />
    const img = <CloudImage img={limited} maxWidth={575} fit="contain" padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="mainWhite"
            left={img}
            right={intro}
            pad={{outer: "large", inner:{horizontal: "large", vertical: "medium"}}}
        />
    );
};

export default LimitedEditionsIntro;
