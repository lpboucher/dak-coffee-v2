import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubscription } from '../../../ducks/subscriptions';
import { getDisplayCurrency } from '../../../ducks/views';

import SubscriptionCard from '../../presentation/subscriptions/SubscriptionCard';

import Loader from '../../utils/SimpleLoader';

class SubscriptionContainer extends Component {

    renderSubscription() {
    const { subscription, currency } = this.props;
    if(subscription && Object.keys(subscription).length > 0) {
        return <SubscriptionCard currency={currency} {...subscription} />
    }

    return <Loader />
    }
    
    render() {
        return (
            <>
                {this.renderSubscription()}
            </>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { subscriptionId } = ownProps;
    return {
        subscription: getSubscription(state, subscriptionId),
        currency: getDisplayCurrency(state)
    };
}

export default connect(mapStateToProps, null)(SubscriptionContainer);