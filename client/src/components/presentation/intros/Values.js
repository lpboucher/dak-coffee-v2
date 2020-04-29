import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const beans = 'Intros/Aboutuswebsite_wiss4b.jpg';

const ValuesIntro = () => {
    const intro =
        <IntroLayout
            link="/about"
            heading="intros.values.title"
            snap="intros.values.description"
            ctaLabel="intros.values.button"
        />
    const img = <CloudImage img={beans} maxWidth={575} minHeight={400} padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="mainWhite"
            left={img}
            right={intro}
        />
    );
};

export default ValuesIntro;
