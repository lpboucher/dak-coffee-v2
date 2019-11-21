import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTermBySlug, getTerms, fetchTerms } from '../../../ducks/terms';

import SingleTerm from '../../presentation/terms/SingleTerm';

import Loader from '../../utils/SimpleLoader';

class TermContainer extends Component {

    componentDidMount() {
        const { termIds } = this.props;
        if (termIds && termIds.length < 1) {
            this.props.fetchTerms();
        }
    };
    
    renderTerm() {
        const { term } = this.props;
            if(term && Object.keys(term).length > 0) {
                return <SingleTerm {...term} />
            }
        
            return <Loader />
        }

    render() {
        return (
            <>
                {this.renderTerm()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.id;
    return {
        termIds: getTerms(state),
        term: getTermBySlug(state, slug)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTerms: () => dispatch(fetchTerms()),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TermContainer);