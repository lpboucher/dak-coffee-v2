import React from 'react';

import { getDisplayedProductTitle, getDisplayedProductPrice } from '../../../../services/productDisplayService';
import { toCurrency } from '../../../../utils/formats';
import { BY_CODE } from '../../../../constants/symbols';

import CartReviewItemLayout from '../../../../layouts/Backbone/CartReview/CartReviewItem';

const CartReviewItem = ({id, name, thumb_image, quantity, type, slug, price, total, currency}) => {
  const productTitle = getDisplayedProductTitle(type, slug);
  const productPrice = getDisplayedProductPrice(price[currency.toLowerCase()]);
  const totalPrice = toCurrency(BY_CODE[currency], total);
  return (
    <CartReviewItemLayout
      image={thumb_image}
      name={name}
      price={productPrice ? productPrice : "..."}
      total={totalPrice ? totalPrice : "..."}
      quantity={quantity}
    />
  )
}


export default CartReviewItem;

