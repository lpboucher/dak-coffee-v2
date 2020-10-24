import React from 'react';
import { useCart } from '../../../../hooks/cart/useCart';
import { useCurrency } from '../../../../hooks/global/useCurrency';

import CartStatisticsLayout from '../../../../layouts/Backbone/CartReview/CartStatistics';

const CartSummary = () => {
  const { quantity, total } = useCart();
  const { toCurrency } = useCurrency();
  const formattedTotal = total ? toCurrency(total) : null;
  return (
    <CartStatisticsLayout
      numberOfItems={quantity}
      total={formattedTotal}
    />
  )
}

export default CartSummary;

