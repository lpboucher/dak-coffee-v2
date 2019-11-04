import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, getCategories } from '../../../ducks/categories';

import CategoryContainer from '../categories/CategoryContainer';

import Loader from '../../utils/SimpleLoader';

class ProductCategoriesContainer extends Component {
    
    componentDidMount() {
        const { categoryIds } = this.props;
        if (categoryIds && categoryIds.length < 1) {
            this.props.fetchCategories();
        }
      };

      renderCategories() {
        const { categoryIds } = this.props;
        if(categoryIds && categoryIds.length > 0) {
            return categoryIds.map(id => <CategoryContainer key={id} categoryId={id} />)
        };

        return <Loader />
      }
    
    render() {
        return (
            <>
                {this.renderCategories()}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        categoryIds: getCategories(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoriesContainer);