import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../../../ducks/cart';

import CartReviewList from '../../../../components/Backbone/CartReview/CartReviewList';

const CartReviewListContainer = () => {
  const cartItemIds = useSelector(state => getCartItems(state));
  return (
    <CartReviewList cartItemIds={cartItemIds} />
  )
}

export default CartReviewListContainer;

