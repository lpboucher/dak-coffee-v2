import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedBySlug, getRelateds, fetchRelated } from '../../../ducks/related';
import { getDisplayCurrency } from '../../../ducks/views';

import CategorySection from '../../presentation/categories/CategorySection';

import Loader from '../../utils/SimpleLoader';

class RelatedContainer extends Component {

    componentDidMount() {
        const { relatedIds } = this.props;
        if (relatedIds && relatedIds.length < 1) {
            this.props.fetchRelated();
        }
      };

    renderRelated() {
    const { related, currency } = this.props;
    if(related && Object.keys(related).length > 0) {
        return <CategorySection currency={currency} {...related} />
    }

    return <Loader />
    }
    
    render() {
        return (
            <>
                {this.renderRelated()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { relatedSlug } = ownProps;
    return {
        related: getRelatedBySlug(state, relatedSlug),
        relatedIds: getRelateds(state),
        currency: getDisplayCurrency(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRelated: () => dispatch(fetchRelated()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedContainer);