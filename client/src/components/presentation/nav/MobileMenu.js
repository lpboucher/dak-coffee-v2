import React from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink, withRouter } from 'react-router-dom';

import { Layer, Box, Menu, Button } from 'grommet';
import { Close } from 'grommet-icons';

const MobileMenuLayout = ({close, t, history}) => {
    return (
        <Layer full="horizontal" modal onEsc={close} onClickOutside={close}>
            <Box flex="grow" justify="start" align="start" pad={{'horizontal': '20px', top: '20px'}} background="darkGrey">
                <Box height="20px" alignSelf="end" onClick={close}>
                    <Close />
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/shop'); close()}}>
                    <Button plain ><NavLink style={{textTransform: 'uppercase', padding: '6px'}} to="/shop">{t("menu.shop")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/subscriptions'); close()}}>
                    <Button plain><NavLink style={{textTransform: 'uppercase', padding: '6px'}} to="/subscriptions">{t("menu.subscriptions")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal">
                    <Menu 
                        label={t("menu.about.top")}
                        dropBackground="darkGrey"
                        margin="none"
                        items={[
                            {label: `${t("menu.about.coffee")}`, onClick:()=>{history.push('/our-coffee'); close()}},
                            {label: `${t("menu.about.about")}`, onClick:()=>{history.push('/about'); close()}},
                        ]}
                    />
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/wholesale'); close()}}>
                    <Button plain><NavLink style={{textTransform: 'uppercase', padding: '6px'}} to="/wholesale">{t("menu.wholesale")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal" onClick={()=>{history.push('/contact'); close()}}>
                    <Button plain><NavLink style={{textTransform: 'uppercase', padding: '6px'}}to="/contact">{t("menu.contact")}</NavLink></Button>
                </Box>
                <Box pad="xsmall" fill="horizontal">
                    <Menu 
                        label={t("menu.blog.top")}
                        dropBackground="darkGrey"
                        margin="none"
                        items={[
                            {label: `${t("menu.blog.guides")}`, onClick:()=>{history.push('/brew'); close()}},
                            {label: `${t("menu.blog.articles")}`, onClick:()=>{history.push('/blog'); close()}},
                        ]}
                    />
                </Box>
            </Box>
        </Layer>
    );
};

export default withRouter(withTranslation()(MobileMenuLayout));