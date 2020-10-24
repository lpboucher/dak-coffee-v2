import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import Headroom from 'react-headroom';
import { Header, Box } from 'grommet';

import { layout } from '../../../../layout';

const HeaderContainer = styled(Headroom)``

const HeaderLayout = ({
  message,
  logo,
  navigation,
  settings
}) => {
  const { greaterThan } = useResponsive();
  return (
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
          <Box
          pad={{horizontal: "small"}}
        >
            {greaterThan.extraSmall &&
              <Link to="/">
                {logo}
              </Link>
            }
          </Box>
          {greaterThan.medium && navigation}
          {settings}
        </Header>
      </Box>
    </HeaderContainer>
  )
}

export default HeaderLayout;

