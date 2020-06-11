import React from 'react';

import SEO from '../../components/utils/SEO/SEO';
import Filters from '../components/Share/Filters';
import ProductsListing from '../components/Products/ProductsListing';

const Shop = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com" />
        <Filters />
        <ProductsListing />
    </>
  );
}

export default Shop;
