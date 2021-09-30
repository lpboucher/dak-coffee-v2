import React from 'react';

import { Instagram, FacebookOption, LinkedinOption, Pinterest } from 'grommet-icons';

export const TOP_NAV = [
  {label:"navigation.shop", target: "/shop"},
  //{label:"navigation.subscriptions", target: "/shop/subscription/dak-subscription?quantity=2x250g"},
  {label:"navigation.about", target: "/about"},
  {label:"navigation.wholesale", target: "/wholesale"}
];

export const MOBILE_NAV = [
  {label:"navigation.home", target: "/"},
  ...TOP_NAV
];

export const MENU_OPTIONS = {
  language: [
    {label: "en", key: "en"},
    {label: "fr", key: "fr"},
    {label: "nl", key: "nl"},
  ],
  currency: [
    {label: "EU €", key: "EUR"},
    {label: "CA $", key: "CAD"},
  ]
}

export const FOOTER_NAV = [
  {target: "/about", label: "navigation.about"},
  {target: "/shop", label: "navigation.shop"},
  {target: "/contact", label: "navigation.contact"},
  //{target: "/shop/subscription/dak-subscription?quantity=2x250g", label: "navigation.subscriptions"},
  {target: "/faq", label: "navigation.faq"},
  {target: "/shipping", label: "navigation.shipping"},
  {target: "/terms", label: "navigation.terms"},
  {target: "/wholesale", label: "navigation.wholesale"},
  {target: "/subscribe", label: "navigation.newsletter"},
  {target: "/privacy", label: "navigation.privacy"},
];

export const FOOTER_ICONS = [
  {key: "instagram", link: "https://www.instagram.com/dakcoffeeroasters", icon: <Instagram />},
  {key: "facebook", link: "https://www.facebook.com/dakcoffeeroasters", icon: <FacebookOption />},
  {key: "linkedin", link: "https://www.linkedin.com/company/13062828", icon: <LinkedinOption />},
  {key: "pinterest", link: "https://pinterest.com/dakcoffeeroasters", icon: <Pinterest />},
]
