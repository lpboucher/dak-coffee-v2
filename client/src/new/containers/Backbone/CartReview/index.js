import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartQuantity, getCartTotal } from '../../../../ducks/cart';
import { openCartSummary, closeCartSummary, isCartOpen } from '../../../../ducks/views';

import CartReview from '../../../components/Backbone/CartReview';
import { getDisplayCurrency } from '../../../../ducks/views';

const CartReviewContainer = () => {
  const dispatch = useDispatch();

  const openCart = () => dispatch(openCartSummary());
  const closeCart = () => dispatch(closeCartSummary());

  const cartQuantity = useSelector(state => getCartQuantity(state));
  const cartTotal = useSelector(state => getCartTotal(state));
  const currency = useSelector(state => getDisplayCurrency(state));
  const isOpen = useSelector(state => isCartOpen(state));

  return (
    <CartReview
      isOpen={isOpen}
      open={openCart}
      close={closeCart}
      quantity={cartQuantity}
      total={cartTotal}
      currency={currency}
    />
  )
}

export default CartReviewContainer;

