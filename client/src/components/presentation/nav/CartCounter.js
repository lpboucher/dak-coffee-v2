import React from 'react';

import CartQuantity from './CartQuantity';
import CartIconLayout from '../../layouts/CartIconLayout';
import CartSummaryContainer from '../../containers/nav/CartSummaryContainer';

import { Cart } from 'grommet-icons';

const CartCounter = ({cartRef, cartQuantity, openCart, closeCart, isCartOpen}) => {
    return (
        <CartIconLayout
            anchor={cartRef}
            open={openCart}
            close={closeCart}
            isOpen={isCartOpen}
            quantity={<CartQuantity quantity={cartQuantity}/>}
            icon={<Cart size="medium"/>}
            tooltip={<CartSummaryContainer close={closeCart} anchor={cartRef}/>}
        />
    );
};

export default CartCounter;