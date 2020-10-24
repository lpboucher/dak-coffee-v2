import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import { Box, Heading, Text, Button } from 'grommet';

import { introLayout } from './globalResponsiveLayout';

import CallToAction from '../presentation/global/CallToAction';
import HeadingWithLB from '../utils/HeadingWithLB';

const IntroSection = ({heading, subHeading, helperText, snap, description, summaryText, alert, btnLabel, ctaLabel, ctaOnPage, link, options=null, children, isSmall=false, t, media}) => {
    const helper = options ? t(helperText, options) : t(helperText);
    const subHead = options ? t(subHeading, options) : t(subHeading);
    const summary = options ? t(summaryText, options) : t(summaryText);
    const layout = introLayout(media, isSmall);
    return (
        <Box margin={layout.around}>
            <HeadingWithLB level={1} margin={layout.main.margin} size={layout.main.size} textAlign={layout.align}>
              <Trans i18nKey={heading} />
            </HeadingWithLB>
            {subHeading &&
                <Heading level={2} margin={layout.main.margin} size={layout.sub.size} textAlign={layout.align}>{subHead}</Heading>
            }
            {helperText &&
                <Heading level={3} margin={layout.main.margin} size={layout.small.size} style={{fontWeight: '400'}} textAlign={layout.align}>{helper}</Heading>
            }
            {snap &&
                <Text size={layout.snap.size} margin={layout.snap.margin} textAlign={layout.align}>
                    <Trans i18nKey={snap} />
                </Text>
            }
            {description &&
                <Text size={layout.main.size} margin={layout.main.margin} textAlign={layout.align}>
                    <Trans i18nKey={description} />
                </Text>
            }
            {summaryText &&
                <Text size={layout.snap.size} margin={layout.snap.margin} textAlign={layout.align} weight="bold">
                    {summary}
                </Text>
            }
            {alert &&
                <Text color="darkHighlight" size={layout.alert.size} margin={layout.alert.margin} textAlign={layout.align} weight="bold">
                    {t(alert)}
                </Text>
            }
            {btnLabel &&
            <Box alignSelf={layout.align}>
                <Link to={link}>
                    <Button primary label={t(btnLabel)} alignSelf={layout.align} style={{color: 'white'}}/>
                </Link>
            </Box>
            }
            {ctaLabel &&
                <CallToAction onPage={ctaOnPage} link={link} label={ctaLabel} />
            }
        </Box>
    );
};

export default withTranslation()(withResponsive(IntroSection));
