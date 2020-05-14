import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

const limited = 'Intros/belavistaimage_izwhdv.jpg';

const LimitedEditionsIntro = ({media}) => {
  const isMobile = media === "extraSmall" || media === "small";
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
            bgColor={isMobile ? "lightGrey" : "mainWhite"}
            left={img}
            right={intro}
            pad={{outer: "large", inner:{horizontal: "large", vertical: "medium"}}}
        />
    );
};

export default withResponsive(LimitedEditionsIntro);
