import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItemFromProducts } from '../../../../../ducks/cart';
import { getDisplayCurrency } from '../../../../../ducks/views';

import CartReviewItem from '../../../../components/Backbone/CartReview/CartReviewItem';
//import SkeletonCardInfo from '../../../components/Share/Skeletons/SkeletonCardInfo';

const CartReviewItemContainer = ({itemId}) => {
    const product = useSelector(state => getCartItemFromProducts(state, itemId));
    const currency = useSelector(state => getDisplayCurrency(state));

    return (
      <>
      { product ?
       <CartReviewItem currency={currency} {...product} />
       :
        //<SkeletonCardInfo height={"300px"} />
        "..."
      }
      </>
    )
}

export default CartReviewItemContainer;
