import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import { Box } from 'grommet';

import { footerLinksLayout } from '../../layouts/globalResponsiveLayout';

const FooterLinks = ({t, media}) => {
    const layout = footerLinksLayout(media)
    return (
        <Box direction="row" wrap pad="medium">
            <Box width={layout.width}><Link to="/about" style={{'fontSize': '12px'}}>{t("footer.menu.about-us")}</Link></Box>
            <Box width={layout.width}><Link to="/shop" style={{'fontSize': '12px'}}>{t("footer.menu.shop")}</Link></Box>
            <Box width={layout.width}><Link to="/contact" style={{'fontSize': '12px'}}>{t("footer.menu.contact")}</Link></Box>
            <Box width={layout.width}><Link to="/subscriptions" style={{'fontSize': '12px'}}>{t("footer.menu.subscription")}</Link></Box>
            <Box width={layout.width}><Link to="/faq" style={{'fontSize': '12px'}}>{t("footer.menu.faq")}</Link></Box>
            <Box width={layout.width}><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.shipping")}</Link></Box>
            <Box width={layout.width}><Link to="/our-coffee" style={{'fontSize': '12px'}}>{t("footer.menu.our-coffee")}</Link></Box>
            <Box width={layout.width}><Link to="/blog" style={{'fontSize': '12px'}}>{t("footer.menu.blog")}</Link></Box>
            <Box width={layout.width}><Link to="/terms" style={{'fontSize': '12px'}}>{t("footer.menu.terms")}</Link></Box>
            <Box width={layout.width}><Link to="/wholesale" style={{'fontSize': '12px'}}>{t("footer.menu.wholesale")}</Link></Box>
            <Box width={layout.width}><Link to="" style={{'fontSize': '12px'}}>{t("footer.menu.brewing")}</Link></Box>
            <Box width={layout.width}><Link to="/privacy" style={{'fontSize': '12px'}}>{t("footer.menu.privacy")}</Link></Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(FooterLinks));