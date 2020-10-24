import React from 'react';
import { useSingleCartItem } from '../../../../hooks/cart/useCart';

import CartReviewItemLayout from '../../../../layouts/Backbone/CartReview/CartReviewItem';

const CartReviewItem = ({itemId}) => {
  const { name, image, quantity, productPrice, totalPrice } = useSingleCartItem(itemId);
  //const productTitle = getDisplayedProductTitle(type, slug);
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

