import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMobileMenu } from '../../../hooks/global/useMobileMenu';

import MobileMenuLayout, { MenuLink, ExternalMenuLink } from '../../../layouts/Backbone/MobileMenu';

import { MOBILE_NAV } from '../../../constants/navigation';

const MobileMenu = () => {
  const { t } = useTranslation();
  const { isOpen, setClose } = useMobileMenu();
  const menuLinks = MOBILE_NAV.map(item => {
        if (item.isExternal === true) {
            return <ExternalMenuLink key={`internal-to-${item.target}`} href={item.target}>{t(item.label)}</ExternalMenuLink>
        } else {
            return <MenuLink key={`internal-to-${item.target}`} to={item.target} onClick={() => setClose()}>{t(item.label)}</MenuLink>
        }
    }
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

