import React from 'react';

import SEO from '../utils/SEO/SEO';
import ArticlesContainer from '../containers/articles/ArticlesContainer';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

const Blog = () => {
    return (
        <>
            <SEO canon="https://www.dakcoffeeroasters.com/blog" />
            <ArticlesContainer />
            <NewsletterContainer />
        </>
    );
};

export default Blog;