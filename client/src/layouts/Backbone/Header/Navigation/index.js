import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { Nav } from 'grommet';

export const MenuLink = styled(NavLink)`
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

export const ExternalMenuLink = styled.a`
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



const NavigationLayout = ({navigationLinks}) => {
  return (
      <Nav direction="row" flex={{grow: 0.5}} justify="around" align="center">
        {navigationLinks.map(link => link)}
      </Nav>
  );
};

export default NavigationLayout;
