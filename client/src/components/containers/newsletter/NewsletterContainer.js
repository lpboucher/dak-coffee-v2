import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToNewsletter } from '../../../ducks/user';
import { getError } from '../../../ducks/views';

import NewsletterSignUp from '../../presentation/newsletter/NewsletterSignUp';

class NewsletterContainer extends Component {

    render() {
        return (
            <NewsletterSignUp {...this.props}/>      
        );
    }
}

function mapStateToProps(state) {
    return {
        message: getError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToNewsletter: (name, email) => dispatch(addToNewsletter(name, email)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterContainer);