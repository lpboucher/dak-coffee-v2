import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { Box, Image, Stack, Text } from 'grommet';
import CallToAction from '../global/CallToAction';

import { heroLayout } from '../../layouts/globalResponsiveLayout';

const Hero = ({bgImage, height="80vh", overlay, t, media, ctaLink, ctaOnPage}) => {
    const layout = heroLayout(media, height);
    const isNotSmall = media === "medium" || media === "large" || media === "infinity";
    return (
    <Stack anchor={overlay.loc} style={{paddingTop: layout.pad}}>
        <Box height={layout.height} width="full">
            <Image
                fit="cover"
                src={bgImage}
            />
        </Box>
        {isNotSmall &&
        <Box animation={"slideRight"} height={overlay.height} width={overlay.width} justify={overlay.justify || "center"} background={`${overlay.withOpacity ? 'rgba(0,0,0,0.5)' : ''}`}>
            <Box width="50vw" pad={{'horizontal': 'large'}}>
                <Text size="large" color='white' weight="bold" >{t(overlay.text)}</Text>
                {overlay.cta &&
                    <CallToAction onPage={ctaOnPage} link={ctaLink} label={overlay.cta} options={overlay.options} color="white" />
                }
            </Box>
        </Box>
        }
    </Stack>
    );
};

export default withTranslation()(withResponsive(Hero));