import React from 'react';
import { useTranslation } from 'react-i18next';

import FooterLayout, { FooterLink } from '../../../layouts/Backbone/Footer';

import { FOOTER_NAV, FOOTER_ICONS } from '../../../constants/navigation';

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = FOOTER_NAV.map(({target, label}) =>
    <FooterLink key={label} to={target}>{t(label)}</FooterLink>
  )
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
