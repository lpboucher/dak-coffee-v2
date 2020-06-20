import React from 'react';

import SEO from '../../components/utils/SEO/SEO';
import ProductsListing from '../components/Products/FilteredProducts';

const Shop = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com/shop" />
        <ProductsListing />
    </>
  );
}

export default Shop;
