import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartMeta, getCartSummary } from '../../../ducks/cart';
import { getDisplayCurrency, isFetching } from '../../../ducks/views';

import OrderSummary from '../../presentation/cart/OrderSummary';
import Loader from '../../utils/SimpleLoader';

class OrderSummaryContainer extends Component {

    componentDidMount() {
        const { cartMeta } = this.props;
        if(Object.keys(cartMeta).length < 1) {
            this.props.fetchCartMeta()
        }
    }

    render() {
        const { currency, cartMeta, isFetching } = this.props;
        return (
            <>
                {(Object.keys(cartMeta).length < 1 || !cartMeta.subTotal) || isFetching ?
                    <Loader pad={{horizontal: 'xlarge', vertical: 'medium'}} align={"end"} size={50}/>
                    :
                    <OrderSummary currency={currency} {...cartMeta} />
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartMeta: getCartSummary(state),
        currency: getDisplayCurrency(state),
        isFetching: isFetching(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCartMeta: () => dispatch(fetchCartMeta()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryContainer);