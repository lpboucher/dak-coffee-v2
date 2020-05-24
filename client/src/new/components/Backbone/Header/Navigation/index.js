import React from 'react';
import { useTranslation } from 'react-i18next';

import { Nav } from 'grommet';

import { TOP_NAV } from '../../../../constants/navigation';

const Navigation = () => {
  const { t } = useTranslation();
  return (
      <Nav direction="row" flex={{grow: 0.5}} justify="around" align="center">
        {TOP_NAV.map(item => item)}
      </Nav>
  );
};

export default Navigation;
