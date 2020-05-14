import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav } from 'grommet';

const Navigation = () => {
  const { t } = useTranslation();
  const menuItems = ["Shop", "Subscriptions", "About", "Blog"];
  return (
      <Nav direction="row" flex={{grow: 0.5}} justify="around">
        {menuItems.map(item => item)}
      </Nav>
  );
};

export default Navigation;
