import React from 'react';

import { Box, Text } from 'grommet';
import DropDownLayout from '../../../../layouts/Share/DropDown';

const IconedDropdown = ({title, elements}) => {
  const accordion = {
    title: title,
    content: <Box pad="medium">
              {elements.map((el, index) =>
                <Box key={`icon-${index}`} direction="row">
                  {el.icon}
                  <Text>{el.text}</Text>
                </Box>
              )}
            </Box>
  }
  return (
    <DropDownLayout
      accordion={accordion}
    />
  );
};

export default IconedDropdown;
