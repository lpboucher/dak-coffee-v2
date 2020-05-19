import React from 'react';

import { Box } from 'grommet';

const SnipcartAdd = ({id, name, prices, description, options, ...rest}) => {
  //options should be object with keys equal to data-item-custom1-name data-item-custom1-options data-item-custom1-value={selected ? selected.quantity : null}
  return (
      <Box
          className="snipcart-add-item"
          data-item-id={id}
          data-item-name={name}
          data-item-price={JSON.stringify(prices)}
          data-item-url={"https://dakcoffeeroasters.com/api/snipcartParser"}
          data-item-description={description}

          primary
          color="mainDark"
          margin={{vertical: "small"}}
          pad="xsmall"
          background="mainDark"
          round="xsmall"
          align="center"
          {...options}
          {...rest}
      >
          {rest.children}
      </Box>
  );
};

export default SnipcartAdd;
