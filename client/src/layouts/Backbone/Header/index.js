import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import Headroom from 'react-headroom';
import { Header, Box } from 'grommet';

import { layout } from '../../../layout';

const HeaderWithHover = styled(Header)`
  transition: background-color 0.5s ease;
`

const HeaderContainer = styled(Headroom)`
    max-height: ${({isTransparent}) => isTransparent ? layout.barHeight : "none"};

    .headroom--unfixed  ${HeaderWithHover} {
        // reactivate if hero image is no longer dark
      // background: transparent;
      background: ${({theme}) => theme.global.colors.mainWhite};
    }

    &:hover ${HeaderWithHover},
    .headroom--pinned  ${HeaderWithHover} {
      background: ${({theme}) => theme.global.colors.mainWhite};
    }
`

const HeaderLayout = ({
  message,
  logo,
  navigation,
  settings,
  isTransparent
}) => {
  const { greaterThan } = useResponsive();
  return (
    <HeaderContainer isTransparent={isTransparent}>
      <Box width="100%" direction="column">
        <Box
          background="mainDark"
          height={layout.barHeight}
          justify="center"
          pad={{horizontal: layout.baseWrapperPadding}}
        >
          {message}
        </Box>
        <HeaderWithHover
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
        </HeaderWithHover>
      </Box>
    </HeaderContainer>
  )
}

export default HeaderLayout;

