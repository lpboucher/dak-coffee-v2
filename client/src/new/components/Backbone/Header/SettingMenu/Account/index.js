import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLogIn } from '../../../../../hooks/session/useLogIn';

import AccountLayout from '../../../../../layouts/Backbone/Header/SettingMenu/Account';
import Loader from '../../../../../utils/loading/SimpleLoader';

const Account = () => {
  const { t } = useTranslation();
  const { isLoggedIn, isStatusChanging, logout } = useLogIn();
    const subMenus = [
        { label: `${t("nav.account")}`, className: 'snipcart-user-profile' },
        { label: `${t("nav.log out")}`, onClick: () => {logout()} },
    ];
    return (
    <>
      {!isStatusChanging ?
          <AccountLayout
            showMenu={isLoggedIn}
            loggedInMenu={subMenus}
          />
          :
          <Loader pad={"small"} size={25}/>
      }
    </>
    );
}

export default Account;
