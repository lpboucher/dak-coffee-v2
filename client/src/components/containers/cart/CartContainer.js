import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartItems } from '../../../ducks/cart';

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