import React from 'react';
import styled from 'styled-components';
import { useAddProductToCart, useCart } from '../../../hooks/cart/useCart';
import { useCurrency } from '../../../hooks/global/useCurrency';

import ClipLoader from 'react-spinners/ClipLoader';

import { getCartProductOptions } from '../../../services/productDataService';

const AddBox = styled.div``

const AddToCart = ({productId, addButton}) => {
  const { name, price, priceStr, description, slug, type } = useAddProductToCart(productId);
  const { productAdding } = useCart(productId)
  const { currency } = useCurrency();
  // need to also add data interval for subscriptions
  // DO NOT FORGET TO ADD TYPE PROPERTY ON SUBSCRIPTION DATA
  const cartOptions = price ? getCartProductOptions(price[currency.toLowerCase()], type) : null;
  return (
    <>
      {price &&
        <AddBox
          className="snipcart-add-item"
          data-item-id={productId}
          data-item-name={name}
          data-item-price={priceStr}
          data-item-url={"https://dakcoffeeroasters.com/api/snipcartParser"}
          data-item-description={description}
          {...cartOptions}
        >
          {productAdding ?
            <ClipLoader size={12} color='white'/>
            :
            addButton
          }
        </AddBox>
      }
    </>
  );
};

export default AddToCart;
