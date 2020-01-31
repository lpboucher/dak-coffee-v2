import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { aboutProfilesLayout } from '../../layouts/globalResponsiveLayout';

import { Box, Heading, Image } from 'grommet';

const olivier = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565720115/Intros/Olivier_p7pok3.jpg';
const veronique = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565720116/Intros/Veronique_gfzqmg.jpg';

const profiles = [
    {
        image: veronique,
        initials: "VL",
        name: "intros.team.VL.name",
        role: "intros.team.VL.title",
        contact: "intros.team.VL.contact"
    },
    {
        image: olivier,
        initials: "OD",
        name: "intros.team.OD.name",
        role: "intros.team.OD.title",
        contact: "intros.team.OD.contact"
    }

]
const SecondaryProfiles = ({t, media}) => {
    const layout = aboutProfilesLayout(media);
    return (
        <Box direction="row" pad="large" background="lightGrey">
            {profiles.map(profile => 
            <Box width={layout.width} pad="large">
                <Box height={layout.height[0]}  width="100%">
                    <Image fit="cover" src={profile.image}/>
                </Box>
                <Box align={layout.align} height={layout.height[1]} pad={{vertical:"small"}}>
                    <Heading level={1} size={layout.size}>{t(`intros.team.${profile.initials}.name`)}</Heading>
                    <Heading level={2} size="smaller">{t(`intros.team.${profile.initials}.title`)}</Heading>
                    <Heading level={3} size="smaller" margin={{"bottom": "medium"}} style={{fontWeight: '400'}}>{t(`intros.team.${profile.initials}.contact`)}</Heading>
                </Box>
            </Box>
            )}
        </Box>
    );
};

export default withTranslation()(withResponsive(SecondaryProfiles));