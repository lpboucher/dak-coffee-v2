import React from 'react';
import { useSelector } from 'react-redux';
import { getCartQuantity, getCartTotal } from '../../../../../ducks/cart';
import { getDisplayCurrency } from '../../../../../ducks/views';

import CartStatistics from '../../../../components/Backbone/CartReview/CartStatistics';

const CartStatisticsContainer = () => {
  const cartQuantity = useSelector(state => getCartQuantity(state));
  const cartTotal = useSelector(state => getCartTotal(state));
  const currency = useSelector(state => getDisplayCurrency(state));
  return (
    <CartStatistics quantity={cartQuantity} total={cartTotal} currency={currency}/>
  )
}

export default CartStatisticsContainer;

