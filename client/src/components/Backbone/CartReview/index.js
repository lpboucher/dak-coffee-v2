import React from 'react';
import { useCart } from '../../../hooks/cart/useCart';

import CartReviewLayout from '../../../layouts/Backbone/CartReview';
import CartSummary from './CartSummary';

const CartReview = () => {
  const { open, quantity } = useCart();
  return (
    <CartReviewLayout
      cartHasStatistics={quantity > 0}
      openCart={open}
      statistics={<CartSummary />}
    />
  )
}

export default CartReview;

