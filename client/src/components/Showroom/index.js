import React from 'react';

import ProductsListing from '../../components/Products/ProductsListing';

const Showroom = () => {
  return (
    <>
      <ProductsListing compilation="events" limit={3}/>
    </>
  );
};

export default Showroom;
