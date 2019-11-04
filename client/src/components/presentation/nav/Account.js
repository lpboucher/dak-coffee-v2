import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter, NavLink } from 'react-router-dom';

import { User } from 'grommet-icons';
import { Box, Menu } from 'grommet';

const Account = withRouter(({t, isLoggedIn, logout, history}) => {
    const subMenus = [
        { label: `${t("nav.account")}`, onClick: () => {history.push('/account')} },
        { label: `${t("nav.log out")}`, onClick: () => {logout()} },
    ];
    return (
        <Box direction="row" align="center">
            {isLoggedIn ?
                <Menu
                    label={<User />}
                    items={subMenus}
                    icon={false}
                    size="xsmall"
                />
                :
                <div className="snipcart-user-profile"><User /></div>
            }
        </Box>
    );
}
)

export default withTranslation()(Account);