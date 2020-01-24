import React from 'react';
import { withTranslation } from 'react-i18next';

import { User } from 'grommet-icons';
import { Box, Menu } from 'grommet';

const Account = ({t, isLoggedIn, logout}) => {
    const subMenus = [
        { label: `${t("nav.account")}`, className: 'snipcart-user-profile' },
        { label: `${t("nav.log out")}`, onClick: () => {logout()} },
    ];
    return (
        <Box direction="row" align="center" margin={{horizontal: '20px'}} style={{cursor: 'pointer'}}>
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

export default withTranslation()(Account);