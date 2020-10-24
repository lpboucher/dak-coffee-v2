import React from 'react';

import CartSummaryLayout from '../../layouts/CartSummaryLayout';
import CartSummaryItemContainer from '../../containers/nav/CartSummaryItemContainer';

const CartSummary = ({cartIds, cartAnchor, close}) => {
    return (
        <CartSummaryLayout
            anchor={cartAnchor}
            close={close}
        >
            {cartIds.map((id, index) => <CartSummaryItemContainer key={`${index}-${id}`} id={id}/>)}
        </CartSummaryLayout>
    );
}

export default CartSummary;