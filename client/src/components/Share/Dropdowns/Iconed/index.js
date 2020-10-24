import React from 'react';

import { Box, Text } from 'grommet';
import DropDownLayout from '../../../../layouts/Share/DropDown';

const IconedDropdown = ({title, elements, panelDirection="column"}) => {
  const itemDirection = panelDirection === "column" ? "row" : "column";
  const accordion = {
    title: title,
    content: <Box direction={panelDirection} pad={{vertical: "small"}}>
              {elements.map((el, index) =>
                <Box direction={itemDirection} pad={{horizontal: "10px"}} align="center" key={`icon-${index}`} width="fit-content">
                  {el.icon}
                  <Text margin={itemDirection === "row" ? {left: "10px"} : {top: "10px"}} size="small">{el.label}</Text>
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
