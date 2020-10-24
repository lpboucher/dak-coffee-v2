import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { Stack, Box, Nav, Layer } from 'grommet';

export const MenuLink = styled(NavLink)`
  position: relative;
  display: block;
  transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
  color: #000;
  text-transform: uppercase;
  font-size: 18px;

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

const CloseIcon = styled(Box)`
  font-size: 36px;
  color: white;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
      color: #999;
  }
`

const MobileMenu = ({isOpen, close, items}) => {
  return (
    <>
      {isOpen &&
          <Layer onEsc={() => close()} onClickOutside={() => close()} modal full animation="fadeIn">
            <Stack fill anchor="top-right">
              <Nav fill background="mainDark" align="center" justify="evenly" pad={{vertical: "50px"}}>
                  {items.map(item => item)}
              </Nav>
              <CloseIcon onClick={() => close()} pad="20px">&#10005;</CloseIcon>
            </Stack>
          </Layer>
      }
    </>
  )
}

export default MobileMenu;
