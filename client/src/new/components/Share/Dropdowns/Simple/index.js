import React from 'react';

import { Box, Text } from 'grommet';
import DropDownLayout from '../../../../layouts/Share/DropDown';

const SimpleDropdown = ({title, text}) => {
  const accordion = {
    title: title,
    content: <Box pad={{vertical: "small", horizontal: "xsmall"}}>
              {Array.isArray(text) ?
                text.map((oneText) =>
                <Text>{`- ${oneText}`}</Text>
                )
              :
                <Text>{text}</Text>
              }
            </Box>
  }
  return (
    <DropDownLayout
      accordion={accordion}
    />
  );
};

export default SimpleDropdown;
