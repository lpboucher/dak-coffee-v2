import React from 'react';
import styled from 'styled-components';

import Headroom from 'react-headroom';
import { Header, Box } from 'grommet';

import { layout } from '../../../../layout';

const HeaderContainer = styled(Headroom)``

const HeaderLayout = ({
  message,
  logo,
  navigation,
  settings
}) => (
  <HeaderContainer>
    <Box width="100%" direction="column">
      <Box
        background="mainDark"
        height={layout.barHeight}
        justify="center"
        pad={{horizontal: layout.baseWrapperPadding}}
      >
        {message}
      </Box>
      <Header
        background="mainWhite"
        height={layout.navigationHeight}
        pad={{horizontal: layout.baseWrapperPadding}}
      >
        {logo}
        {navigation}
        {settings}
      </Header>
    </Box>
  </HeaderContainer>
)

export default HeaderLayout;

