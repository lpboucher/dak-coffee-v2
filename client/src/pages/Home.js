import React from 'react';
import styled from 'styled-components';

import SEO from '../utils/seo/SEO';
import ProductsListing from '../components/Products/ProductsListing';

const Separator = styled.div`
  width: 100%;
  height: ${({height}) => !height ? '20px' : height};
`

const Home = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com" />
        <Separator />
        <ProductsListing compilation="home" limit={9}/>
    </>
  );
}

export default Home;
