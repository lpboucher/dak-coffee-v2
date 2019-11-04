import React from 'react';

import ProductDetailsContainer from '../containers/products/ProductDetailsContainer';
import RelatedContainer from '../containers/related/RelatedContainer';
//import NewsletterContainer from '../../container/Newsletter/NewsletterContainer';

const Product = ({ match }) => {
    const { slug } = match.params
    return (
    <>
        <ProductDetailsContainer id={slug}/>
        <RelatedContainer relatedSlug={`related_${slug}`}/>
        {/*<NewsletterContainer />*/}
    </>
    );
};

export default Product;