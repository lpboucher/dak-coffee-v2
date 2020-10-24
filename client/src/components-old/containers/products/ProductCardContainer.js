import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../../../ducks/products';
import { getDisplayCurrency } from '../../../ducks/views';

import ProductCard from '../../presentation/products/ProductCard';

class ProductCardContainer extends Component {
    
    componentDidMount() {
      };

      renderProduct() {
        const { product, currency } = this.props;
        return <ProductCard currency={currency} {...product}/>  
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
    const { id } = ownProps;
    return {
        product: getProduct(state, id),
        currency: getDisplayCurrency(state)
    };
}

export default connect(mapStateToProps, null)(ProductCardContainer);