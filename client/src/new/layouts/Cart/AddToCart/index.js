import React from 'react';
import styled from 'styled-components';

import { Box } from 'grommet';

const AddBox = styled(Box)`
  cursor: pointer;
`

const SnipcartAdd = ({id, name, prices, description, options, ...rest}) => {
  return (
      <AddBox
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
      </AddBox>
  );
};

export default SnipcartAdd;
