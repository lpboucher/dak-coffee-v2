import React from 'react';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import HeaderLayout from '../../../layouts/Backbone/Header';
import MessageBar from './MessageBar';
import Logo from '../../../utils/logo/Logo';
import Navigation from './Navigation';
import SettingMenu from './SettingMenu';

import { layout } from '../../../layout';

const {
  logoHeight,
  logoWidth,
} = layout;

const Header = ({isTransparent}) => {
  const { mediaType } = useResponsive();
  return (
    <HeaderLayout
      message={<MessageBar />}
      logo={
        <Logo
          height={layout[`logoHeight_${mediaType}`] || logoHeight}
          width={layout[`logoWidth_${mediaType}`] || logoWidth}
        />
      }
      navigation={<Navigation />}
      settings={<SettingMenu />}
      isTransparent={isTransparent}
    />
  );
};

export default Header;
