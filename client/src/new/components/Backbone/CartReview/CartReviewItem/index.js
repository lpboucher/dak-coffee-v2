import React from 'react';
import { useSingleCartItem } from '../../../../hooks/cart/useCart';
import { useCurrency } from '../../../../hooks/global/useCurrency';

import { getDisplayedProductTitle, getDisplayedProductPrice } from '../../../../services/productDisplayService';

import CartReviewItemLayout from '../../../../layouts/Backbone/CartReview/CartReviewItem';

const CartReviewItem = ({itemId}) => {
  const { name, image, quantity, type, slug, price, total } = useSingleCartItem(itemId);
  const { currency, toCurrency } = useCurrency();
  const productTitle = getDisplayedProductTitle(type, slug);
  const productPrice = getDisplayedProductPrice(price[currency.toLowerCase()]);
  const totalPrice = toCurrency(total);
  return (
    <CartReviewItemLayout
      image={`Products/Thumbs/${image}`}
      name={name}
      price={productPrice ? productPrice : "..."}
      total={totalPrice ? totalPrice : "..."}
      quantity={quantity}
    />
  )
}


export default CartReviewItem;

