import React from 'react';

import CartLayout from '../../layouts/CartLayout';
import CartItemContainer from '../../containers/cart/CartItemContainer';

const Cart = ({items}) => {
    return (
        <CartLayout>
            {items.map((id, index) => <CartItemContainer key={`${index}-${id}`} id={id}/>)}
        </CartLayout>
    );
};

export default Cart;