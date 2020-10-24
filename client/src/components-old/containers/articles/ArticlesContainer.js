import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, getArticles } from '../../../ducks/articles';

import Articles from '../../presentation/articles/Articles';

import Loader from '../../utils/SimpleLoader';

class ArticlesContainer extends Component {

    componentDidMount() {
        const { articleIds } = this.props;
        if (articleIds && articleIds.length < 1) {
            this.props.fetchArticles();
        }
    };

    renderArticle() {
    const { articleIds } = this.props;
    if(articleIds && articleIds.length > 0) {
        return <Articles articles={articleIds}/>
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

function mapStateToProps(state) {
    return {
        articleIds: getArticles(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);