import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductBySlug } from '../../../ducks/products';
import { getDisplayCurrency } from '../../../ducks/views';

import SingleProduct from '../../presentation/products/SingleProduct';

import Loader from '../../utils/SimpleLoader';

class ProductDetailsContainer extends Component {

    renderProduct() {
    const { product, currency } = this.props;
    if(product && Object.keys(product).length > 0) {return <SingleProduct currency={currency} product={product}/>};

    return <Loader />
    }

    render() {
        return (
            <>
                {this.renderProduct()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const slug  = ownProps.id;
    return {
        product: getProductBySlug(state, slug),
        currency: getDisplayCurrency(state)
    }
}

export default connect(mapStateToProps, null)(ProductDetailsContainer);
