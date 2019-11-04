import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { navbarLayout } from './globalResponsiveLayout';

import { Grid } from 'grommet';

const NavbarLayout = ({message, logo, topNav, subNav, media}) => {
    const layout = navbarLayout(media)
    const headerStyles = { background: "white", padding: "0", zIndex: "1", position: "fixed" }
    const isNotSmall = media === "medium" || media === 'large' || media === "infinity";
    const isLarge = media === 'large' || media === "infinity";
    return (
    <>
        <Grid
            fill="horizontal"
            rows={layout.rows}
            columns={layout.columns}
            gap="none"
            areas={layout.areas}
            style={headerStyles}
            >
                {isNotSmall ? message : null}
                {logo}
                {topNav}
                {isLarge ? subNav : null}
        </Grid>
    </>
    );
};

export default withResponsive(NavbarLayout);