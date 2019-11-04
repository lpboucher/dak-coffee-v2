import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubscriptions, getSubscriptions } from '../../../ducks/subscriptions';

import SubscriptionsDetails from '../../presentation/subscriptions/SubscriptionsDetails';

import Loader from '../../utils/SimpleLoader';


class SubscriptionsContainer extends Component {
    
    componentDidMount() {
        const { subscriptionIds } = this.props;
        if (subscriptionIds && subscriptionIds.length < 1) {
            this.props.fetchSubscriptions();
        }
    };
    
    renderSubscriptions() {
        const { subscriptionIds } = this.props;
        if(subscriptionIds && subscriptionIds.length > 0) {
            return <SubscriptionsDetails subscriptionIds={subscriptionIds}/>
        }

        return <Loader />
    }

    
    render() {
        return (
            <>
                {this.renderSubscriptions()}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        subscriptionIds: getSubscriptions(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSubscriptions: () => dispatch(fetchSubscriptions()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionsContainer);