import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { Box, Stack, Text } from 'grommet';
import CallToAction from '../global/CallToAction';
import CloudImage from '../../utils/CloudImage';

import { heroLayout } from '../../layouts/globalResponsiveLayout';

const Hero = ({bgImage, height="76vh", overlay, t, media, ctaLink, ctaOnPage, override=false}) => {
    const layout = heroLayout(media, height);
    const isLarge = media === "large" || media === "infinity";
    return (
    <Stack anchor={overlay.loc} style={{paddingTop: layout.pad}}>
        <Box height={override ? height : layout.height} width="full">
            <CloudImage img={bgImage} maxWidth={1500}/>
        </Box>
        {isLarge &&
        <Box animation={"slideRight"} height={overlay.height} width={overlay.width} justify={overlay.justify || "center"} background={`${overlay.withOpacity ? 'rgba(0,0,0,0.5)' : ''}`}>
            <Box width="50vw" pad={{'horizontal': 'large'}}>
                <Text size={layout.overlaySize} color={layout.overlayColor} weight="bold" >{t(overlay.text)}</Text>
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
