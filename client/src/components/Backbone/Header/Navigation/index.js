import React from 'react';
import { useTranslation } from 'react-i18next';

import NavigationLayout, { MenuLink, ExternalMenuLink } from '../../../../layouts/Backbone/Header/Navigation';

import { TOP_NAV } from '../../../../constants/navigation';

const Navigation = () => {
  const { t } = useTranslation();
  const menuLinks = TOP_NAV.map(item => {
        if (item.isExternal === true) {
            return <ExternalMenuLink key={`internal-to-${item.target}`} href={item.target} target="_blank" rel="noopener noreferrer">{t(item.label)}</ExternalMenuLink>
        } else {
            return <MenuLink key={`internal-to-${item.target}`} to={item.target}>{t(item.label)}</MenuLink>
        }
    }
  )
  return (
    <NavigationLayout
      navigationLinks={menuLinks}
    />
  );
};

export default Navigation;
