import React from 'react';
import { useCart } from '../../../../hooks/cart/useCart';

import ClipLoader from 'react-spinners/ClipLoader';
import { Add } from 'grommet-icons';

const AddToCartButton = ({id}) => {
  const { productAdding } = useCart(id);
  return (
      <>
        {productAdding ?
          <ClipLoader size={12} color='white'/>
          :
          <Add size="small" />
        }
      </>
  );
};

export default AddToCartButton;
