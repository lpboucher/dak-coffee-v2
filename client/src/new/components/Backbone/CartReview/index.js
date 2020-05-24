import React from 'react';

import CartReviewLayout from '../../../layouts/Backbone/CartReview';
import CartReviewListContainer from '../../../containers/Backbone/CartReview/CartReviewList';
import CartStatisticsContainer from '../../../containers/Backbone/CartReview/CartStatistics';

import { BY_CODE } from '../../../constants/symbols';
import { toCurrency } from '../../../utils/formats';

const CartReview = ({quantity, total, currency, isOpen, open, close}) => {
  const currencySymbol = BY_CODE[currency];
  const formattedTotal = total ? toCurrency(currencySymbol, total) : null;
  return (
    <CartReviewLayout
      cartHasStatistics={quantity > 0}
      isCartOpen={isOpen}
      openCart={open}
      closeCart={close}
      cartList={<CartReviewListContainer />}
      statistics={<CartStatisticsContainer />}
    />
  )
}

export default CartReview;

