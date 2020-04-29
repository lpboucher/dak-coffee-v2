import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const ethics = 'Intros/Coffeebeans_short_laidrq.jpg';

const Ethics = () => {
    const intro =
        <IntroLayout
            heading="intros.ethics.title"
            description="intros.ethics.description"
        />
    const img = <CloudImage img={ethics} maxWidth={575} fit="cover" padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="lightGrey"
            left={img}
            right={intro}
        />
    );
};

export default Ethics;
