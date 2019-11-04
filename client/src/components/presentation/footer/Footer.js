import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import FooterDescription from './FooterDescription';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import { Box } from 'grommet';

import { footerLayout } from '../../layouts/globalResponsiveLayout';

const Footer = ({media}) => {
    const layout = footerLayout(media);
    return (
        <>
            <Box direction={layout.dir} pad={layout.pad} background="lightGrey">
                <FooterDescription />
                <FooterLinks />
            </Box>
            <FooterDisclaimer />
        </>
    );
};

export default withResponsive(Footer);