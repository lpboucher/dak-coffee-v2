import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';
import SecondaryProfiles from './SecondaryProfiles';

import { aboutProfilesLayout } from '../../layouts/globalResponsiveLayout';

const louis = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565720115/Intros/LP_aop9ug.jpg';

const Profiles = ({t, media}) => {
    const layout = aboutProfilesLayout(media);
    const intro = 
    <IntroLayout 
        heading="intros.team.LP.name" 
        subHeading="intros.team.LP.title"
        helperText="intros.team.LP.contact"
        description="intros.team.LP.description"
    />
    return (
        <>
            <TwoColLayout 
                bgColor="mainWhite"
                left={<FullImg imgLink={louis} margin={layout.pad}/>}
                right={intro}
            />
            <SecondaryProfiles />
        </>
    );
};

export default withTranslation()(withResponsive(Profiles));