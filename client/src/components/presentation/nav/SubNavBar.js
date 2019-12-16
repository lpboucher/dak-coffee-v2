import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box } from 'grommet';

import NavItem from './SubNavItem';
import NavItemWithDrop from './SubNavItemWithDrop'
import DropItem from '../../utils/DropItem';

const SubNavbar = ({loc, t}) => {
    return (
        <Box gridArea={loc} direction="row" align="center" justify="around" margin={{'horizontal': '50px'}}>
            <Box pad="xsmall">
                <NavItem to="/shop">{t("menu.shop")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/subscriptions">{t("menu.subscriptions")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItemWithDrop label={t("menu.about.top")}>
                    <DropItem to="/our-coffee">{t("menu.about.coffee")}</DropItem>
                    <DropItem to="/about">{t("menu.about.about")}</DropItem>
                </NavItemWithDrop>
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
    );
};

export default withTranslation()(SubNavbar);