import React from 'react';
import { useCartItems } from '../../../../hooks/cart/useCart';

import CartReviewListLayout from '../../../../layouts/Backbone/CartReview/CartReviewList';
import CartReviewItem from '../CartReviewItem';

const CartReviewList = () => {
  const { cartItemIds } = useCartItems();
  return (
    <CartReviewListLayout>
      {cartItemIds.map(id =>
        <CartReviewItem key={id} itemId={id} />
      )}
    </CartReviewListLayout>
  )
}


export default CartReviewList;

