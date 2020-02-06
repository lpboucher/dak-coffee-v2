import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { Box } from 'grommet';

import NavItem from './SubNavItem';
import NavItemWithDrop from './SubNavItemWithDrop'
import DropItem from '../../utils/DropItem';
import Logo from '../../utils/Logo';
import { logoLayout } from '../../layouts/globalResponsiveLayout';

const MainNav = ({t, media}) => {
    const layout = logoLayout(media);
    const isMobile = media === "small" || media === "medium" || media === "extraSmall";
    return (
        <>
        {!isMobile &&
        <Box direction="row" align="center" justify="around" margin={media !== 'large' ? {'horizontal': '50px'} : ''}>
            <Box pad="xsmall">
                <NavItem to="/shop">{t("menu.shop")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/subscriptions">{t("menu.subscriptions")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItemWithDrop label={t("menu.about.top")} noMargin>
                    <DropItem to="/our-coffee">{t("menu.about.coffee")}</DropItem>
                    <DropItem to="/about">{t("menu.about.about")}</DropItem>
                </NavItemWithDrop>
            </Box>
            <Box pad="small">
                <Link style={{lineHeight: '0'}} to="/">
                    <Logo width={layout.width} />
                </Link>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/wholesale">{t("menu.wholesale")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/contact">{t("menu.contact")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/blog">{t("menu.blog.top")}</NavItem>
            </Box>
        </Box>
        }
        </>
    );
};

export default withTranslation()(withResponsive(MainNav));