import React from 'react';
import { useAddProductToCart } from '../../../hooks/cart/useCart';
import { useCurrency } from '../../../hooks/global/useCurrency';

import SnipcartAdd from '../../../layouts/Cart/AddToCart'
import AddToCartButton from '../../../components/Cart/AddToCart/AddButton'

import { getCartProductPrice, getCartProductOptions } from '../../../services/productDataService';
import { getDisplayedProductDescription } from '../../../services/productDisplayService';

const AddToCart = ({productId}) => {
  const { name, price, slug, type } = useAddProductToCart(productId);
  const { currency } = useCurrency();
  const priceString = getCartProductPrice(price);
  const translatedDescription = getDisplayedProductDescription(type, slug);
  // need to also add data interval for subscriptions
  // DO NOT FORGET TO ADD TYPE PROPERTY ON SUBSCRIPTION DATA
  const cartOptions = getCartProductOptions(price[currency.toLowerCase()], type);
  return (
      <SnipcartAdd
        id={productId}
        name={name}
        slug={slug}
        prices={priceString}
        description={translatedDescription}
        options={cartOptions}
      >
          <AddToCartButton id={productId}/>
      </SnipcartAdd>
  );
};

export default AddToCart;
