import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const coffee = 'Intros/Carefullyselected_qcsvjz.jpg';

const CoffeeIntro = () => {
    const intro =
        <IntroLayout
        heading="intros.coffee.title"
        description="intros.coffee.description"
        />
    const img = <CloudImage img={coffee} maxWidth={575} fit="contain" padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="mainWhite"
            right={img}
            left={intro}
        />
    );
};

export default CoffeeIntro;
