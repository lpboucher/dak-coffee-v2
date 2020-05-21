import React from 'react';
import { useTranslation } from 'react-i18next';

import { Instagram, FacebookOption, LinkedinOption, Pinterest } from 'grommet-icons';

import FooterLayout from '../../../layouts/Backbone/Footer';

const footerLinks = [
  {target: "/about", identifier: "about-us"},
  {target: "/shop", identifier: "shop"},
  {target: "/contact", identifier: "contact"},
  {target: "/subscriptions", identifier: "subscription"},
  {target: "/faq", identifier: "faq"},
  {target: "/shipping", identifier: "shipping"},
  {target: "/our-coffee", identifier: "our-coffee"},
  {target: "/blog", identifier: "blog"},
  {target: "/terms", identifier: "terms"},
  {target: "/wholesale", identifier: "wholesale"},
  {target: "/subscribe", identifier: "newsletter"},
  {target: "/privacy", identifier: "privacy"},
];

const footerIcons = [
  {key: "instagram", link: "https://www.instagram.com/dakcoffeeroasters", icon: <Instagram />},
  {key: "facebook", link: "https://www.facebook.com/dakcoffeeroasters", icon: <FacebookOption />},
  {key: "linkedin", link: "https://www.linkedin.com/company/13062828", icon: <LinkedinOption />},
  {key: "pinterest", link: "https://pinterest.com/dakcoffeeroasters", icon: <Pinterest />},
]

const Footer = () => {
    const { t } = useTranslation();
    return (
      <FooterLayout
        description={t("footer.description")}
        socialIcons={footerIcons}
        navigationLinks={footerLinks.map(link => ({...link, identifier: t(`footer.menu.${link.identifier}`)}))}
        disclaimerText={t("footer.rights")}
      />
    );
};

export default Footer;
