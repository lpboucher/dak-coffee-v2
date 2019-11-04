import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductBySlug } from '../../../ducks/products';
import { getDisplayCurrency } from '../../../ducks/views';

import SingleProduct from '../../presentation/products/SingleProduct';

import Loader from '../../utils/SimpleLoader';

import { buildImageUrl } from '../../utils/Images/generateImage';

class ProductDetailsContainer extends Component {

    componentDidMount() {
        const { product } = this.props;
        if(product && Object.keys(product).length > 0) { 
            new Image().src = buildImageUrl(`Products/Mains/${product.main_image}`, 'product_main') };
    }

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