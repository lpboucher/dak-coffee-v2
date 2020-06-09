import React from 'react';

import { Nav } from 'grommet';

import Account from './Account';
import Cart from './Cart';
import OptionSelect from './OptionSelect';

const Navigation = () => {
  const menuItems = [
    <Account key="account" />,
    <Cart key="cart" />,
    <OptionSelect key="lang" optionType="language" />,
    <OptionSelect key="curr" optionType="currency" />,
  ];
  return (
      <Nav direction="row" justify="around" align="center">
        {menuItems.map(item => item)}
      </Nav>
  );
};

export default Navigation;
