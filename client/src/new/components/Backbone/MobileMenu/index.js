import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMobileMenu } from '../../../hooks/global/useMobileMenu';

import MobileMenuLayout, { MenuLink } from '../../../layouts/Backbone/MobileMenu';

import { MOBILE_NAV } from '../../../constants/navigation';

const MobileMenu = () => {
  const { t } = useTranslation();
  const { isOpen, setClose } = useMobileMenu();
  const menuLinks = MOBILE_NAV.map(item =>
    <MenuLink key={`mobile-to-${item.target}`} to={item.target} onClick={() => setClose()}>{t(item.label)}</MenuLink>
  )
  return (
    <MobileMenuLayout
      isOpen={isOpen}
      close={setClose}
      items={menuLinks}
    />
  )
}

export default MobileMenu;

