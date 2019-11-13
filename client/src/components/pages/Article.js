import React from 'react';

import SingleArticleContainer from '../containers/articles/SingleArticleContainer';

const Article = ({ match }) => {
    const { slug } = match.params
    return (
    <>
        <SingleArticleContainer id={slug}/>
    </>
    );
};

export default Article;