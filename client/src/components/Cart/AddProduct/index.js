import React from 'react';
import styled from 'styled-components';
import { useAddProductToCart } from '../../../hooks/cart/useCart';

import { BACKEND_URL } from "../../../global";
import { getImageAddress } from "../../../constants/endpoints";

const AddBox = styled.div``

const AddToCart = ({productId, addButton, selected}) => {
  const { name, price, priceStr, description, cartOptions, thumbnail } = useAddProductToCart(productId, selected);
  const imageURL = getImageAddress("c_thumb,w_250", thumbnail);
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
          data-item-image={imageURL}
          {...cartOptions}
        >
            {addButton}
        </AddBox>
      }
    </>
  );
};

export default AddToCart;
