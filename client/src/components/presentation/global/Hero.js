import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';
import Slide from 'react-reveal/Slide';

import { Box, Image, Stack, Text } from 'grommet';

import { heroLayout } from '../../layouts/globalResponsiveLayout';

const Hero = ({bgImage, height="90vh", overlay, t, media}) => {
    const layout = heroLayout(media, height);
    const isNotSmall = media === "medium" || media === "large" || media === "infinity"
    return (
    <Stack anchor={overlay.loc} style={{paddingTop: layout.pad}}>
        <Box height={layout.height} width="full">
            <Image
                fit="cover"
                src={bgImage}
            />
        </Box>
        {isNotSmall &&
        <Slide right duration={1500}>
        <Box height={overlay.height} width={overlay.width} justify={overlay.justify || "center"} background={`${overlay.withOpacity ? 'rgba(0,0,0,0.5)' : ''}`}>
            <Box width="50vw" pad={{'horizontal': 'large'}}>
                <Text size="large" color='white' weight="bold" >{t(overlay.text)}</Text>
            </Box>
        </Box>
        </Slide>
        }
    </Stack>
    );
};

export default withTranslation()(withResponsive(Hero));