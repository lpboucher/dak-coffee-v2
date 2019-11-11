import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

import { introLayout } from './globalResponsiveLayout';

const IntroSection = ({heading, subHeading, helperText, description, btnLabel, link, options=null, children, isSmall=false, t, media}) => {
    const helper = options ? t(helperText, options) : t(helperText);
    const subHead = options ? t(subHeading, options) : t(subHeading);
    const layout = introLayout(media, isSmall);
    return (
        <Box margin={layout.around}>
            <Heading level={1} margin={layout.main.margin} size={layout.main.size} textAlign={layout.align}>{t(heading)}</Heading>
            {subHeading &&
                <Heading level={2} margin={layout.main.margin} size={layout.sub.size} textAlign={layout.align}>{subHead}</Heading>
            }
            {helperText &&
                <Heading level={3} margin={layout.main.margin} size={layout.small.size} style={{fontWeight: '400'}} textAlign={layout.align}>{helper}</Heading>
            }
            <Text size={layout.main.size} margin={layout.main.margin} textAlign={layout.align}>
                <Trans i18nKey={description} />
            </Text>
            {btnLabel &&
            <Box alignSelf={layout.align}>
                <Link to={link}>
                    <Button primary label={t(btnLabel)} alignSelf={layout.align} style={{color: 'white'}}/>
                </Link>
            </Box>
            }
        </Box>
    );
};

export default withTranslation()(withResponsive(IntroSection));