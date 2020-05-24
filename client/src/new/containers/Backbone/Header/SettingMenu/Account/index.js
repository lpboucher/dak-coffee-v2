import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isCheckingLoginStatus } from '../../../../../../ducks/views';
import { getLoggedInStatus, logout } from '../../../../../../ducks/user';

import Account from '../../../../../components/Backbone/Header/SettingMenu/Account';

import Loader from '../../../../../../components/utils/SimpleLoader';

const AccountContainer = () => {
  const loggedIn = useSelector(state => getLoggedInStatus(state));
  const isStatusChanging = useSelector(state => isCheckingLoginStatus(state));
  const onLogout = useDispatch(logout());
  return (
    <>
        {!isStatusChanging ?
            <Account isLoggedIn={loggedIn} logout={onLogout}/>
            :
            <Loader pad={"small"} size={25}/>
        }
    </>
  );
};

export default AccountContainer;
