import React from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import { Box, Menu } from 'grommet';
import { ReactComponent as User} from '../../../assets/icons/user.svg';

const UserIcon = styled(User)`
    fill: white;
    width: 20px;
    height: 20px;
`

const UserWrapper = styled.div`
    line-height: 20px;
`

const StyledMenu = styled(Menu)`
    margin-top: -12px;
    margin-bottom: -12px;
`

const Account = ({t, isLoggedIn, logout}) => {
    const subMenus = [
        { label: `${t("nav.account")}`, className: 'snipcart-user-profile' },
        { label: `${t("nav.log out")}`, onClick: () => {logout()} },
    ];
    return (
        <Box direction="row" align="center" margin={{horizontal: '20px'}} style={{cursor: 'pointer'}}>
            {isLoggedIn ?
                <StyledMenu
                    label={<UserIcon />}
                    items={subMenus}
                    icon={false}
                    size="xsmall"
                />
                :
                <UserWrapper className="snipcart-user-profile"><UserIcon /></UserWrapper>
            }
        </Box>
    );
}

export default withTranslation()(Account);
