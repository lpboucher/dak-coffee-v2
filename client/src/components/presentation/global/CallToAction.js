import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Box, Text } from 'grommet';

import { ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';

const LinkNoHeight = styled(Link)`
    line-height: 0;
`

const CallToAction = ({color='#444444', link, label, t}) => {
    return (
        <Box align="center" direction="row" margin={{top: '40px'}}>
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

export default withTranslation()(CallToAction);