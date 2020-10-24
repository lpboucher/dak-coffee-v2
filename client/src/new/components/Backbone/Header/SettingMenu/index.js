import React from 'react';
import { useMobileMenu } from '../../../../hooks/global/useMobileMenu';
import { useResponsive } from '../../../../hooks/utils/useResponsive';

import { Nav } from 'grommet';

import Account from './Account';
import Cart from './Cart';
import OptionSelect from './OptionSelect';
import Burger from '../../../../utils/menu/Burger';

import { layout } from '../../../../../layout';

const {
  settingsGap,
} = layout;

const Navigation = () => {
  const { isOpen, setOpen, setClose } = useMobileMenu();
  const { lessThan, mediaType } = useResponsive();
  const baseMenuItems = [
    <Account key="account" />,
    <Cart key="cart" />,
    <OptionSelect key="curr" optionType="currency" />,
  ]
  const allMenuItems = [
    ...baseMenuItems,
    <OptionSelect key="lang" optionType="language" />,
  ];
  const menuItems = lessThan.large ? baseMenuItems : allMenuItems;
  return (
      <Nav direction="row" gap={layout[`settingsGap_${mediaType}`] || settingsGap} justify="around" align="center">
        {menuItems.map(item => item)}
        {lessThan.large &&
          <Burger open={isOpen} setOpen={setOpen} setClose={setClose} />
        }
      </Nav>
  );
};

export default Navigation;
