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

const CallToAction = ({color='#444444', link, label, t, media}) => {
    const layout = callToActionLayout(media);
    return (
        <Box align="center" justify={layout.align} direction="row" margin={{top: '40px'}}>
            <Link to={link}>
                <Text size="mid" color={color} weight="bold" margin={{right: '20px'}}>
                        {t(label)}
                </Text>
            </Link>
            <LinkNoHeight to={link} >
                <Arrow fill={color} height="24px" width="24px" />
            </LinkNoHeight>
        </Box>
    );
};

export default withTranslation()(withResponsive(CallToAction));