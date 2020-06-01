import React from 'react';

import CartStatisticsLayout from '../../../../layouts/Backbone/CartReview/CartStatistics';

import { BY_CODE } from '../../../../constants/symbols';
import { toCurrency } from '../../../../services/formats';

const CartStatistics = ({quantity, total, currency}) => {
  const currencySymbol = BY_CODE[currency];
  const formattedTotal = total ? toCurrency(currencySymbol, total) : null;
  return (
    <CartStatisticsLayout
      numberOfItems={quantity}
      total={formattedTotal}
    />
  )
}

export default CartStatistics;

