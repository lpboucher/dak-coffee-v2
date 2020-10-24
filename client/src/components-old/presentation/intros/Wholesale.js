import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const wholesale = 'Intros/wholesalepartner_jfq91s.jpg';

const Wholesale = () => {
    const intro =
        <IntroLayout
        heading="intros.wholesale.title"
        description="intros.wholesale.description"
        />
    const img = <CloudImage img={wholesale} maxWidth={575} fit="contain" padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="lightGrey"
            left={img}
            right={intro}
        />
    );
};

export default Wholesale;
