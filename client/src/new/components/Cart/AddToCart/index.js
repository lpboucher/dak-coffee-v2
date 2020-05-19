import React from 'react';

import SnipcartAdd from '../../../layouts/Cart/AddToCart'
import { Add } from 'grommet-icons';

const AddToCart = ({id, name, price, slug, stock, url, description, type, currency, selected=null}) => {
  return (
      <SnipcartAdd
        id={id}
      >
        <Add size="small" />
      </SnipcartAdd>
  );
};

export default AddToCart;
