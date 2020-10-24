import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItemFromProducts } from '../../../ducks/cart';
import { getDisplayCurrency } from '../../../ducks/views';

import CartSummaryItem from '../../presentation/nav/CartSummaryItem';

class CartSummaryItemContainer extends Component {
    render() {
        const { cartItem, currency } = this.props;
        return <CartSummaryItem currency={currency} {...cartItem}/>
    }
}

function mapStateToProps(state, ownProps) {
    const { id } = ownProps;
    return {
        cartItem: getCartItemFromProducts(state, id),
        currency: getDisplayCurrency(state)
    };
}

export default connect(mapStateToProps, null)(CartSummaryItemContainer);
