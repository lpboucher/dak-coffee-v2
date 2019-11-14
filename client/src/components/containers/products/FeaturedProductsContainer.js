import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections, getCollections } from '../../../ducks/collections';
import { getProductsByCollection } from '../../../ducks/products';

import ProductGridLayout from '../../layouts/ProductGridLayout';

import Loader from '../../utils/SimpleLoader';

class FeaturedProductsContainer extends Component {
    
    componentDidMount() {
        const { collections } = this.props;
        if (collections && collections.length < 1) {
            this.props.fetchCollections();
        }
      };

      renderProducts() {
        const { productIds } = this.props;
        if(productIds && productIds.length > 0) {return <ProductGridLayout products={productIds}/>
    };

        return <Loader />
      }
    
    render() {
        return (
            <>
                {this.renderProducts()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { collection } = ownProps;
    return {
        productIds: getProductsByCollection(state, collection),
        collections: getCollections(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProductsContainer);