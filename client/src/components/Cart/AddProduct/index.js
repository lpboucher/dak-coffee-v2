import React from 'react';
import styled from 'styled-components';
import { useAddProductToCart } from '../../../hooks/cart/useCart';

import { BACKEND_URL } from "../../../global";

const AddBox = styled.div``

const AddToCart = ({productId, addButton, selected}) => {
  const { name, price, priceStr, description, cartOptions } = useAddProductToCart(productId, selected);
  return (
    <>
      {price &&
        <AddBox
          className="snipcart-add-item"
          data-item-id={productId}
          data-item-name={name}
          data-item-price={priceStr}
          data-item-url={`${BACKEND_URL}/snipcartParser`}
          data-item-description={description}
          {...cartOptions}
        >
            {addButton}
        </AddBox>
      }
    </>
  );
};

export default AddToCart;
