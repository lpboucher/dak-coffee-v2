import React from 'react';

import HeaderLayout from '../../../layouts/Backbone/Header';
import MessageBar from './MessageBar';
import Logo from '../../../../components/utils/Logo';
import Navigation from './Navigation';
import SettingMenu from './SettingMenu';

const Header = () => {
  return (
    <HeaderLayout
      message={<MessageBar />}
      logo={<Logo width="80px"/>}
      navigation={<Navigation />}
      settings={<SettingMenu />}
    />
  );
};

export default Header;
