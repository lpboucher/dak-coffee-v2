import React from 'react';
import styled from 'styled-components';

import { Box, Paragraph } from 'grommet';

const BoldText = styled(Paragraph)`
  font-weight: 500;
`

const TextBoxLayout = ({children}) => {
    return (
      <Box background="secondaryGrey" pad={{vertical: "7%", horizontal: "20%"}}>
        <BoldText size="medium" textAlign="center" alignSelf="center">
          {children}
        </BoldText>
      </Box>
    );
};

export default TextBoxLayout;
