import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticleBySlug, getArticles, fetchArticles } from '../../../ducks/articles';
import { getDisplayLang } from '../../../ducks/views';

import SingleArticle from '../../presentation/articles/SingleArticle';

import Loader from '../../utils/SimpleLoader';

class SingleArticleContainer extends Component {

    componentDidMount() {
        const { articleIds } = this.props;
        if (articleIds && articleIds.length < 1) {
            this.props.fetchArticles();
        }
    };

    renderArticle() {
    const { article, lang } = this.props;
        if(article && Object.keys(article).length > 0) {
            return <SingleArticle {...article} language={lang} />
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
    const slug  = ownProps.id;
    return {
        articleIds: getArticles(state),
        article: getArticleBySlug(state, slug),
        lang: getDisplayLang(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticleContainer);