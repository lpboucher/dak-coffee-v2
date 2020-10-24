import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../../../ducks/articles';
import { getDisplayLang } from '../../../ducks/views';

import ArticleCard from '../../presentation/articles/ArticleCard';

import Loader from '../../utils/SimpleLoader';

class ArticleContainer extends Component {

    renderArticle() {
    const { article, lang } = this.props;
    if(article && Object.keys(article).length > 0) {
        return <ArticleCard {...article} language={lang} />
    }

    return <Loader />
    }
    
    render() {
        return (
            <>
                {this.renderArticle()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { articleId } = ownProps;
    return {
        article: getArticle(state, articleId),
        lang: getDisplayLang(state)
    };
}

export default connect(mapStateToProps, null)(ArticleContainer);