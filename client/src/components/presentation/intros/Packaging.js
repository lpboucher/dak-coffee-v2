import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const pack = "Intros/Ecopackaging_rk8afi.jpg";

const PackagingIntro = () => {
    const intro =
        <IntroLayout
            heading="intros.packaging.title"
            description="intros.packaging.description"
        />
    const img = <CloudImage img={pack} maxWidth={575} padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="lightGrey"
            left={img}
            right={intro}
        />
    );
};

export default PackagingIntro;
