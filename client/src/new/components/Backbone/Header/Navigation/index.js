import React from 'react';
import { useTranslation } from 'react-i18next';

import NavigationLayout, { MenuLink } from '../../../../layouts/Backbone/Header/Navigation';

import { TOP_NAV } from '../../../../constants/navigation';

const Navigation = () => {
  const { t } = useTranslation();
  const menuLinks = TOP_NAV.map(item =>
    <MenuLink key={`internal-to-${item.target}`} to={item.target}>{t(item.label)}</MenuLink>
  )
  return (
    <NavigationLayout
      navigationLinks={menuLinks}
    />
  );
};

export default Navigation;
