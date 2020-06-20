import React from 'react';

import { Box, Text } from 'grommet';
import DropDownLayout from '../../../../layouts/Share/DropDown';

const SimpleDropdown = ({title, text}) => {
  const accordion = {
    title: title,
    content: <Box pad="medium">
              <Text>{text}</Text>
            </Box>
  }
  return (
    <DropDownLayout
      accordion={accordion}
    />
  );
};

export default SimpleDropdown;
