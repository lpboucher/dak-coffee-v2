import React from 'react';
import styled from 'styled-components';

import { Box, Paragraph } from 'grommet';

const BoldText = styled(Paragraph)`
  font-weight: 500;
`

const TextBoxLayout = ({children, hasSecondaryBackground = false}) => {
    return (
      <Box background={hasSecondaryBackground ? "minor-4" : "secondaryGrey"} pad={{vertical: "7%", horizontal: "20%"}}>
        <BoldText background={hasSecondaryBackground ? "mainWhite" : "mainDark"} size="medium" textAlign="center" alignSelf="center">
          {children}
        </BoldText>
      </Box>
    );
};

export default TextBoxLayout;
