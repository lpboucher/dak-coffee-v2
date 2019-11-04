import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItemFromProducts, updateCartItem, removeCartItem } from '../../../ducks/cart';
import { getDisplayCurrency } from '../../../ducks/views';

import CartItem from '../../presentation/cart/CartItem';

import { buildImageUrl } from '../../utils/Images/generateImage';

class CartItemContainer extends Component {

    componentDidMount() {
        const { cartItem } = this.props;
        new Image().src = buildImageUrl(`Products/Thumbs/${cartItem.image}`, 'product_cart');
    }

    render() {
        const { updateCartItem, removeCartItem, currency, cartItem } = this.props;
        return <CartItem  updateCartItem={updateCartItem} removeFromCart={removeCartItem} currency={currency} {...cartItem}/>
    }
}

function mapStateToProps(state, ownProps) {
    const { id } = ownProps;
    return {
        cartItem: getCartItemFromProducts(state, id),
        currency: getDisplayCurrency(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCartItem: (id, options) => dispatch(updateCartItem(id, options)),
        removeCartItem: (id) => dispatch(removeCartItem(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemContainer);