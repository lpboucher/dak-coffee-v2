import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import TwoColLayout from '../../layouts/TwoColLayout';
import IntroLayout from '../../layouts/IntroLayout';
import CloudImage from '../../utils/CloudImage';

import { aboutProfilesLayout } from '../../layouts/globalResponsiveLayout';

const louis = 'Intros/Aboutuswebsite_wiss4b.jpg';

const Profiles = ({t, media}) => {
    const layout = aboutProfilesLayout(media);
    const intro =
    <IntroLayout
        heading="intros.team.LP.name"
        subHeading="intros.team.LP.title"
        helperText="intros.team.LP.contact"
        description="intros.team.LP.description"
    />
    const img = <CloudImage img={louis} maxWidth={575} fit="contain" padding="24px 48px"/>
    return (
        <>
            <TwoColLayout
                bgColor="mainWhite"
                left={img}
                right={intro}
            />
        </>
    );
};

export default withTranslation()(withResponsive(Profiles));
