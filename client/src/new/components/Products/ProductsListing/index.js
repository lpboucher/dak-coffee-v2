import React from 'react';

import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCardContainer from '../../../containers/Products/ProductCard';

const ProductsListing = ({productIds}) => (
  <ProductsListingLayout>
    { productIds.map(id => <ProductCardContainer key={id} productId={id} /> )}
  </ProductsListingLayout>
)


export default ProductsListing;

