import React from 'react';
import styled from 'styled-components';

import { Box, Menu } from 'grommet';

const StyledMenu = styled(Menu)`
  margin-top: -12px;
  margin-bottom: -12px;
`

const OptionBox = styled(Box)`
  cursor: pointer;
`

const OptionSelectLayout = ({activeOption, otherOptions}) => {
  return (
    <OptionBox align="center">
        <StyledMenu
          label={activeOption}
          items={otherOptions}
          icon={false}
          size="medium"
        />
    </OptionBox>
  );
}

export default OptionSelectLayout;


