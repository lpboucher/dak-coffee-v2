import React from 'react';

import SEO from '../../components/utils/SEO/SEO';
import HeroSlider from '../components/HeroSlider';
import ProductsListing from '../components/Products/ProductsListing';

const Home = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com" />
        <HeroSlider />
        <ProductsListing compilation="home" limit={9}/>
    </>
  );
}

export default Home;
