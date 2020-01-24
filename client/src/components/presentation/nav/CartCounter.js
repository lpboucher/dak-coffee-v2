import React from 'react';
import styled from 'styled-components';

import CartQuantity from './CartQuantity';
import CartIconLayout from '../../layouts/CartIconLayout';
import CartSummaryContainer from '../../containers/nav/CartSummaryContainer';

import { Cart } from 'grommet-icons';

const CartIcon = styled(Cart)`
    width: 20px;
    height: 20px;
`

const CartCounter = ({cartRef, cartQuantity, openCart, closeCart, isCartOpen}) => {
    const quantity = <CartQuantity quantity={cartQuantity}/>;
    const cartIcon = <CartIcon />;
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