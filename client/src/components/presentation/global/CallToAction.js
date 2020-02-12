import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box, Text } from 'grommet';

import { ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

import { callToActionLayout } from '../../layouts/globalResponsiveLayout';

const LinkNoHeight = styled(Link)`
    line-height: 0;
`

const CallToAction = ({color='#444444', link, onPage, label, options, t, media}) => {
    const layout = callToActionLayout(media);
    const ctaLabel = options ? t(label, options) : t(label);
    return (
        <Box align="center" justify={layout.align} direction="row" margin={{top: '40px'}}>
            <Link to={!onPage ? link : null} onClick={onPage ? () => window.scrollTo({top: 1324,behavior: 'smooth'}) : null}>
                <Text size="mid" color={color} weight="bold" margin={{right: '20px'}}>
                        {ctaLabel}
                </Text>
            </Link>
            <LinkNoHeight to={!onPage ? link : null} onClick={onPage ? () => window.scrollTo({top: 1324,behavior: 'smooth'}) : null}>
                <Arrow fill={color} height="24px" width="24px" />
            </LinkNoHeight>
        </Box>
    );
};

export default withTranslation()(withResponsive(CallToAction));