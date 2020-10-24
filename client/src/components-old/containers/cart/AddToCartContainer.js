import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../../ducks/products';
import { getSubscription } from '../../../ducks/subscriptions';
import { getDisplayCurrency } from '../../../ducks/views';

import AddToCart from '../../presentation/global/AddToCart';

class AddToCartContainer extends Component {

    render() {
        const { product, currency, ...rest } = this.props;
        return (
            <AddToCart currency={currency} {...product} {...rest} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { productId, subscriptionId } = ownProps;
    return {
        product: productId ? getProduct(state, productId) : getSubscription(state, subscriptionId),
        currency: getDisplayCurrency(state)
    };
}

export default connect(mapStateToProps, null)(AddToCartContainer);