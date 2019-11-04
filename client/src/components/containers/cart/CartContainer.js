import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { fetchCartItems, getCartItems, getCartDiscount, getCartSubtotal,removeItem, updateItem, applyPromo } from '../../../ducks/cart';
import { getCartItems } from '../../../ducks/cart';
//import { getOrderTotal, getOrderTax, getShippingCosts } from '../../../ducks/checkout';
//import { getError } from '../../../ducks/views';

import Cart from '../../presentation/cart/Cart';

class CartContainer extends Component {

    render() {
        const { cartItems } = this.props;
        if (cartItems.length < 1) {return <Redirect to="/shop" />}

        return <Cart items={cartItems}/>
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getCartItems(state),
    };
}

export default connect(mapStateToProps, null)(CartContainer);