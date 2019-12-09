import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItemFromProducts } from '../../../ducks/cart';
import { getDisplayCurrency } from '../../../ducks/views';

import CartSummaryItem from '../../presentation/nav/CartSummaryItem';

import { buildImageUrl } from '../../utils/Images/generateImage';

class CartSummaryItemContainer extends Component {

    componentDidMount() {
        const { cartItem } = this.props;
        new Image().src = buildImageUrl(`Products/Thumbs/${cartItem.image}`, 'f_auto,q_auto');
    }

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