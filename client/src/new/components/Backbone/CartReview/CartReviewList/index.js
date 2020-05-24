import React from 'react';

import CartReviewListLayout from '../../../../layouts/Backbone/CartReview/CartReviewList';
import CartReviewItemContainer from '../../../../containers/Backbone/CartReview/CartReviewItem';

const CartReviewList = ({cartItemIds}) => (
  <CartReviewListLayout>
    { cartItemIds.map(id => <CartReviewItemContainer key={id} itemId={id} /> )}
  </CartReviewListLayout>
)


export default CartReviewList;

