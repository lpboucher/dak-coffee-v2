import React from 'react';

import { Box, Text } from 'grommet';

const SimpleDropdown = ({text}) => {
  return (
    <Box pad={{vertical: "small", horizontal: "xsmall"}}>
      {Array.isArray(text) ?
        text.map((oneText) =>
        <Text>{`- ${oneText}`}</Text>
        )
      :
        <Text>{text}</Text>
      }
    </Box>
  );
};

export default SimpleDropdown;
