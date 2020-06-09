import React from 'react';

import SEO from '../../components/utils/SEO/SEO';
import HeroSlider from '../components/HeroSlider';
import Quote from '../components/Share/Quote';
import ProductsListing from '../components/Products/ProductsListing';

const Home = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com" />
        <HeroSlider />
        <Quote quote="hero.home"/>
        <ProductsListing />
    </>
  );
}

export default Home;
