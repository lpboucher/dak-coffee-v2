import React from 'react';

import CartQuantity from './CartQuantity';
import CartIconLayout from '../../layouts/CartIconLayout';
import CartSummaryContainer from '../../containers/nav/CartSummaryContainer';

import { Cart } from 'grommet-icons';

const CartCounter = ({cartRef, cartQuantity, openCart, closeCart, isCartOpen}) => {
    const quantity = <CartQuantity quantity={cartQuantity}/>;
    const cartIcon = <Cart size="medium"/>;
    const cartSummary = <CartSummaryContainer close={closeCart} anchor={cartRef}/>;
    return (
        <CartIconLayout
            anchor={cartRef}
            open={openCart}
            close={closeCart}
            isOpen={isCartOpen}
            quantity={quantity}
            icon={cartIcon}
            tooltip={cartSummary}
        />
    );
};

export default CartCounter;