import React from 'react';
import { Link } from 'react-router-dom';
import withResponsive from '../../HOCs/withResponsive';

import Logo from '../../utils/Logo';
import { logoLayout } from '../../layouts/globalResponsiveLayout';

import { Box } from 'grommet';

const LogoBar = ({loc, media}) => {
    const layout = logoLayout(media)
    return (
        <Box direction="row" align="center" justify={layout.align} gridArea={loc} fill pad={layout.pad}>
            <Link to="/">
                <Logo width={layout.width} />
            </Link>
        </Box>
    );
}

export default withResponsive(LogoBar);