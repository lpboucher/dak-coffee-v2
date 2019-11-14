import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCartItems } from '../../../ducks/cart';
import { getProducts, fetchProducts } from '../../../ducks/products';
import { getSubscriptions, fetchSubscriptions } from '../../../ducks/subscriptions';
import { isFetching } from '../../../ducks/views';

import CartSummary from '../../presentation/nav/CartSummary';

import Loader from '../../utils/SimpleLoader';

class CartSummaryContainer extends Component {

    componentDidMount() {
        const { products, plans } = this.props;
        if (products.length < 1) this.props.fetchProducts();
        if (plans.length < 1) this.props.fetchSubscriptions();
    }

    render() {
        const { cartItems, isFetching, close, anchor, plans, products } = this.props;
        if(!isFetching) {return <CartSummary cartIds={cartItems} cartAnchor={anchor} close={close}/>}
        if(isFetching || plans.length < 1 || products.length < 1) {return <Loader />}
    }
}

function mapStateToProps(state) {
    return {
        cartItems: getCartItems(state),
        isFetching: isFetching(state),
        products: getProducts(state),
        plans: getSubscriptions(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummaryContainer);