import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const limited = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1580466638/Intros/milehighillustration_ehbosh.png';

const LimitedEditionsIntro = () => {
    const intro =
        <IntroLayout
            heading="intros.limited edition.title"
            subHeading="intros.limited edition.soldOut"
            snap="intros.limited edition.description"
            ctaLabel="intros.limited edition.button"
            link="/shop"
        />
    return (
        <TwoColLayout
            bgColor="mainWhite"
            left={<FullImg imgLink={limited} size="contain" withMinHeight={false}/>}
            right={intro}
            pad={{outer: "large", inner:{horizontal: "large", vertical: "medium"}}}
        />
    );
};

export default LimitedEditionsIntro;
