import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollections, getCollections } from '../../../ducks/collections';
//import { fetchInventories, getInventories } from '../../../ducks/inventories';
import { getProductsByCollection } from '../../../ducks/products';
//import { addToCart } from '../../../ducks/cart';

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
        //inventories: getInventories(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
        //addToCart: (id, quantity) => dispatch(addToCart(id, quantity))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProductsContainer);