import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

import { aboutProfilesLayout } from '../../layouts/globalResponsiveLayout';

import { Box, Heading, Image } from 'grommet';

const louis = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/LP_aop9ug.jpg';
const olivier = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720115/Intros/Olivier_p7pok3.jpg';
const veronique = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565720116/Intros/Veronique_gfzqmg.jpg';

const Profiles = ({t, media}) => {
    const layout = aboutProfilesLayout(media);
    const intro = 
    <IntroLayout 
        heading="intros.team.LP.name" 
        subHeading="intros.team.LP.title"
        helperText="intros.team.LP.contact"
        description="intros.team.LP.description"
    />
    const secondaryProfiles = (img, name, role, contact) => 
            <Fragment>
                <Box height={layout.height[0]}  width="100%">
                    <Image fit="cover" src={img}/>
                </Box>
                <Box align={layout.align} height={layout.height[1]} pad={"medium"}>
                    <Heading level={1} size={layout.size}>{t(name)}</Heading>
                    <Heading level={2} size="small">{t(role)}</Heading>
                    <Heading level={3} size="" margin={{"bottom": "medium"}} style={{fontWeight: '400'}}>{t(contact)}</Heading>
                </Box>      
            </Fragment>
    return (
        <Fragment>
            <TwoColLayout 
                bgColor="mainWhite"
                left={<FullImg imgLink={louis} margin={layout.pad}/>}
                right={intro}
            />
            <TwoColLayout 
                bgColor="lightGrey"
                left={secondaryProfiles(veronique, "intros.team.VL.name" , "intros.team.VL.title", "intros.team.VL.contact")}
                right={secondaryProfiles(olivier, "intros.team.OD.name" , "intros.team.OD.title", "intros.team.OD.contact")}
            />
        </Fragment>
    );
};

export default withTranslation()(withResponsive(Profiles));