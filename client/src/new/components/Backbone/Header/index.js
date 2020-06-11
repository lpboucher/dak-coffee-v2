import React from 'react';

import HeaderLayout from '../../../layouts/Backbone/Header';
import MessageBar from './MessageBar';
import Logo from '../../../utils/logo/Logo';
import Navigation from './Navigation';
import SettingMenu from './SettingMenu';

const Header = () => {
  return (
    <HeaderLayout
      message={<MessageBar />}
      logo={<Logo height="24px"/>}
      navigation={<Navigation />}
      settings={<SettingMenu />}
    />
  );
};

export default Header;
