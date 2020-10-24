import React from 'react';
import styled from 'styled-components';

import { Box, Menu } from 'grommet';

import { ReactComponent as User} from '../../../../../assets/icons/user.svg';

const UserIcon = styled(User)`
  fill: black;
  width: 25px;
  height: 25px;
`

const UserWrapper = styled.div`
  line-height: 20px;
`

const StyledMenu = styled(Menu)`
  margin-top: -12px;
  margin-bottom: -12px;
`

const AccountBox = styled(Box)`
  cursor: pointer;
`

const AccountLayout = ({showMenu, loggedInMenu}) => {
  return (
    <AccountBox align="center">
      {showMenu ?
        <StyledMenu
          label={<UserIcon />}
          items={loggedInMenu}
          icon={false}
          size="xsmall"
        />
      :
        <UserWrapper className="snipcart-user-profile">
          <UserIcon />
        </UserWrapper>
      }
    </AccountBox>
  );
}

export default AccountLayout;


