import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Nav } from 'grommet';

import { TOP_NAV } from '../../../../constants/navigation';

const MenuLink = styled(NavLink)`
  position: relative;
    display: block;
    transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
    color: #000;
    text-transform: uppercase;

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: #000;
        transform-origin: right top;
        transform: scale(0, 1);
        transition: color 0.1s,transform 0.2s ease-out;
    }
    &:hover,
    &:focus,
    &:active {
        color: #999;
        text-decoration: none;
    }
    &:active::before {
        background-color: #000;
    }
    &:hover::before,
    &:focus::before {
        transform-origin: left top;
        transform: scale(1, 1);
    }
`

const Navigation = () => {
  const { t } = useTranslation();
  return (
      <Nav direction="row" flex={{grow: 0.5}} justify="around" align="center">
        {TOP_NAV.map(item =>
          <MenuLink key={`internal-to-${item.target}`} to={item.target}>{item.label}</MenuLink>
        )}
      </Nav>
  );
};

export default Navigation;
