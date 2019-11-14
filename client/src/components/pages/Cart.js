import React from 'react';

import CartContainer from '../containers/cart/CartContainer';
import OrderSummaryContainer from '../containers/cart/OrderSummaryContainer';
import RelatedContainer from '../containers/related/RelatedContainer';

const Cart = () => {
    return (
    <>
        <CartContainer/>
        <OrderSummaryContainer />
        <RelatedContainer relatedSlug={`related_cart`}/>
    </>
    );
};

export default Cart;