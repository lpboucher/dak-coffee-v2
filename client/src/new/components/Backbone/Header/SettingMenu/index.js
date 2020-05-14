import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav } from 'grommet';

const Navigation = () => {
  const { t } = useTranslation();
  const menuItems = ["EN", "EU", "Cart"];
  return (
      <Nav direction="row" justify="around">
        {menuItems.map(item => item)}
      </Nav>
  );
};

export default Navigation;
