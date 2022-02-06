import React from 'react';
import { useTranslation } from 'react-i18next';

import FooterLayout, { ExternalFooterLink, FooterLink } from '../../../layouts/Backbone/Footer';

import { FOOTER_NAV, FOOTER_ICONS } from '../../../constants/navigation';

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = FOOTER_NAV.map(({target, label, isExternal}) => {
        if (isExternal === true) {
            return <ExternalFooterLink key={label} href={target} target="_blank" rel="noopener noreferrer">{t(label)}</ExternalFooterLink>
        } else {
            return <FooterLink key={label} to={target}>{t(label)}</FooterLink>
        }
    })
  return (
    <FooterLayout
      description={t("footer.description")}
      socialIcons={FOOTER_ICONS}
      navigationLinks={footerLinks}
      disclaimerText={t("footer.rights")}
    />
  );
};

export default Footer;
