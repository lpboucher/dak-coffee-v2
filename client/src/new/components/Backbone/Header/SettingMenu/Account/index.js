import React from 'react';
import { useTranslation } from 'react-i18next';

import AccountLayout from '../../../../../layouts/Backbone/Header/SettingMenu/Account';

const Account = ({isLoggedIn, logout}) => {
  const { t } = useTranslation();
    const subMenus = [
        { label: `${t("nav.account")}`, className: 'snipcart-user-profile' },
        { label: `${t("nav.log out")}`, onClick: () => {logout()} },
    ];
    return (
      <AccountLayout
        showMenu={isLoggedIn}
        loggedInMenu={subMenus}
      />
    );
}

export default Account;
