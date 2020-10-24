import React from 'react';

import SEO from '../utils/seo/SEO';
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
