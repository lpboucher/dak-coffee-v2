import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const beans = 'Intros/Aboutuswebsite_wiss4b.jpg';

const ValuesIntro = ({media}) => {
  const isMobile = media === "extraSmall" || media === "small";
    const intro =
        <IntroLayout
            link="/about"
            heading="intros.values.title"
            snap="intros.values.description"
            ctaLabel="intros.values.button"
        />
    const img = isMobile ?
    <CloudImage img={beans} maxWidth={575} fit="cover"/>
    :
    <CloudImage img={beans} maxWidth={575} minHeight={400} padding="24px 48px"/>
    return (
        <TwoColLayout
            bgColor="mainWhite"
            left={img}
            right={intro}
            noPad={isMobile}
        />
    );
};

export default withResponsive(ValuesIntro);
