import React from 'react';

import { Box, Text } from 'grommet';

const IconedDropdown = ({elements, panelDirection="column"}) => {
  const itemDirection = panelDirection === "column" ? "row" : "column";
  return (
    <Box direction={panelDirection} pad={{vertical: "small"}}>
      {elements.map((el, index) =>
        <Box direction={itemDirection} pad={{horizontal: "10px"}} align="center" key={`icon-${index}`} width="fit-content">
          {el.icon}
          <Text margin={itemDirection === "row" ? {left: "20px"} : {top: "10px"}} size="small">{el.label}</Text>
        </Box>
      )}
    </Box>
  );
};

export default IconedDropdown;
