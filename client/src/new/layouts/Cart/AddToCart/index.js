import React from 'react';

import { Box } from 'grommet';

const SnipcartAdd = ({id, name, prices, description, options, ...rest}) => {
  return (
      <Box
          className="snipcart-add-item"
          data-item-id={id}
          data-item-name={name}
          data-item-price={prices}
          data-item-url={"https://dakcoffeeroasters.com/api/snipcartParser"}
          data-item-description={description}
          {...options}

          primary
          color="mainDark"
          margin={{vertical: "small"}}
          pad="xsmall"
          background="mainDark"
          round="xsmall"
          align="center"
          {...rest}
      >
          {rest.children}
      </Box>
  );
};

export default SnipcartAdd;
