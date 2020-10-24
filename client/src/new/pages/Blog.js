import React from 'react';

import SEO from '../../components/utils/SEO/SEO';
import BlogListing from '../components/Blog/BlogListing';

const Blog = () => {
  return (
    <>
        <SEO canon="https://www.dakcoffeeroasters.com/shop" />
        <BlogListing />
    </>
  );
}

export default Blog;
