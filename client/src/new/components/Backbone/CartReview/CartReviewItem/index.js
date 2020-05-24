import React from 'react';

import { getDisplayedProductTitle, getDisplayedProductPrice } from '../../../../services/productDisplayService';

import CartReviewItemLayout from '../../../../layouts/Backbone/CartReview/CartReviewItem';

const CartReviewItem = ({id, name, thumb_image, quantity, type, slug, price, currency}) => {
  const productTitle = getDisplayedProductTitle(type, slug);
  const productPrice = getDisplayedProductPrice(price[currency.toLowerCase()]);
  return (
    <CartReviewItemLayout
      image={thumb_image}
      name={name}
      price={price ? price.eur.value : "..."}
      quantity={quantity}
    />
  )
}


export default CartReviewItem;

