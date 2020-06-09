import React from 'react';
import { useCart } from '../../../hooks/cart/useCart';

import CartReviewLayout from '../../../layouts/Backbone/CartReview';
import CartReviewList from '../../Backbone/CartReview/CartReviewList';
import CartSummary from './CartSummary';

const CartReview = () => {
  const { open, close, isOpen, quantity } = useCart();
  return (
    <CartReviewLayout
      cartHasStatistics={quantity > 0}
      isCartOpen={isOpen}
      openCart={open}
      closeCart={close}
      cartList={<CartReviewList />}
      statistics={<CartSummary />}
    />
  )
}

export default CartReview;

