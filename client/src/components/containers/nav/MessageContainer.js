import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation, getDisplayCurrency } from '../../../ducks/views';

import Message from '../../presentation/nav/Message';

class MessageContainer extends Component {

    render() {
        return <Message {...this.props} />
    }
}

function mapStateToProps(state) {
    return {
        currency: getDisplayCurrency(state),
        location: getLocation(state)
    };
}

export default connect(mapStateToProps, null)(MessageContainer);
