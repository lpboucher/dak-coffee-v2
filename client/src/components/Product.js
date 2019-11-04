import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BuyButton from './BuyButton';
import { getAllProducts } from '../ducks/products';

class Product extends Component {
  render() {
    const { products } = this.props;
    if (products && products.length > 0) {
      return (
        <div className="ProductList">
          <h2 className="ProductList-title">Available Products ({products.length})</h2>
          <div className="ProductList-container">
            {products.map((product, index) => {
              return (
                <div className="ProductList-product" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                    <BuyButton 
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        weight={product.weight}
                        url={"https://581ce3d7.ngrok.io/"}
                        description={product.description}
                    />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="ProductList-title">Waiting for API...</h2>);
  }
}

function mapStateToProps(state) {
    return {
        products: getAllProducts(state)
    };
}

export default connect(mapStateToProps, null)(Product);