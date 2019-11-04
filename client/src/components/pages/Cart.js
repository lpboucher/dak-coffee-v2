import React from 'react';

import CartContainer from '../containers/cart/CartContainer';
import OrderSummaryContainer from '../containers/cart/OrderSummaryContainer';
//import CategoryRowContainer from '../../container/Products/CategoryRowContainer';

const Cart = () => {
    return (
    <>
        <CartContainer/>
        <OrderSummaryContainer />
        {//<CategoryRowContainer name="You may also like" category='coffee-equipment' limit={3}/>
        }  
    </>
    );
};

export default Cart;