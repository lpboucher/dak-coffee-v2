import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory, getCategories, fetchCategories } from '../../../ducks/categories';

import CategorySection from '../../presentation/categories/CategorySection';

import Loader from '../../utils/SimpleLoader';

class CategoryContainer extends Component {

    componentDidMount() {
        const { categoryIds } = this.props;
        if (categoryIds && categoryIds.length < 1) {
            this.props.fetchCategories();
        }
      };

    renderCategory() {
    const { category } = this.props;
    if(category && Object.keys(category).length > 0) {
        return <CategorySection {...category} />
    }

    return <Loader />
    }
    
    render() {
        return (
            <>
                {this.renderCategory()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { categoryId } = ownProps;
    return {
        category: getCategory(state, categoryId),
        categoryIds: getCategories(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);