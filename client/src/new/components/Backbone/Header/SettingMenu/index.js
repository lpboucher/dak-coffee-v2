import React from 'react';

import { Nav } from 'grommet';

import AccountContainer from '../../../../containers/Backbone/Header/SettingMenu/Account';
import CartContainer from '../../../../containers/Backbone/Header/SettingMenu/Cart';
import OptionSelectContainer from '../../../../containers/Backbone/Header/SettingMenu/OptionSelect';

const Navigation = () => {
  const menuItems = [
    <AccountContainer key="account" />,
    <CartContainer key="cart" />,
    <OptionSelectContainer key="lang" optionType="language" />,
    <OptionSelectContainer key="curr" optionType="currency" />,
  ];
  return (
      <Nav direction="row" justify="around" align="center">
        {menuItems.map(item => item)}
      </Nav>
  );
};

export default Navigation;
