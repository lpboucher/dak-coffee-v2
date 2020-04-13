import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const beans = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1580468218/Intros/Aboutus2020_dwhzne.jpg';

const ValuesIntro = () => {
    const intro =
        <IntroLayout
            link="/about"
            heading="intros.values.title"
            snap="intros.values.description"
            ctaLabel="intros.values.button"
        />
    return (
        <TwoColLayout
            bgColor="mainWhite"
            left={<FullImg imgLink={beans}/>}
            right={intro}
        />
    );
};

export default ValuesIntro;
