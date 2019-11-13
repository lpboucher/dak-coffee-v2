import React from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { Box, Menu } from 'grommet';

import NavItem from './SubNavItem';

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
                <Menu 
                    label={t("menu.about.top")}
                    dropBackground="mainWhite"
                    margin="none"
                    items={[
                        {label: `${t("menu.about.coffee")}`, as: NavLink, to: "/our-coffee"},
                        {label: `${t("menu.about.about")}`, as: NavLink, to: "/about"},
                    ]}
                />
            </Box>
            <Box pad="xsmall">
                <NavItem to="/wholesale">{t("menu.wholesale")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <NavItem to="/contact">{t("menu.contact")}</NavItem>
            </Box>
            <Box pad="xsmall">
                <Menu 
                    label={t("menu.blog.top")}
                    dropBackground="mainWhite"
                    margin="none"
                    items={[
                        //{label: `${t("menu.blog.guides")}`, as: NavLink, to: "/brew"},
                        {label: `${t("menu.blog.articles")}`, as: NavLink, to: "/blog"},
                    ]}
                />
            </Box>
        </Box>
    );
};

export default withTranslation()(SubNavbar);