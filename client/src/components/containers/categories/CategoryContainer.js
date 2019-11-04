import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../../ducks/categories';
import { getDisplayCurrency } from '../../../ducks/views';

import CategorySection from '../../presentation/categories/CategorySection';

import Loader from '../../utils/SimpleLoader';

class CategoryContainer extends Component {

    renderCategory() {
    const { category, currency } = this.props;
    if(category && Object.keys(category).length > 0) {
        return <CategorySection currency={currency} {...category} />
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
        currency: getDisplayCurrency(state)
    };
}

export default connect(mapStateToProps, null)(CategoryContainer);