import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, isFetching, openCartSummary, closeCartSummary } from '../../../ducks/views';
import { getCartQuantity, updateCart, updatingCart, clearCart } from '../../../ducks/cart';
import { itemAdded, orderCompleted } from '../../utils/Tracking/snipcartEvents';

import CartCounter from '../../presentation/nav/CartCounter';

import Loader from '../../utils/SimpleLoader';

class CartMenuContainer extends Component {
    cartRef = createRef();

    componentDidMount() {
        window.Snipcart.subscribe('item.adding', (ev, item, items) => {
            this.props.updating();
        });
        window.Snipcart.subscribe('item.added', (item) => {
            this.props.updateCart();
            itemAdded(item);
        });
        window.Snipcart.subscribe('item.updated', (item) => {
            this.props.updateCart();
        });
        window.Snipcart.subscribe('item.removed', (item) => {
            this.props.updateCart();
        });
        window.Snipcart.subscribe('order.completed', (data) => {
            if(data.status === "Processed") {
                this.props.clearCart();
                orderCompleted(data)
            }
        });
    }

    componentWillUnmount() {
        window.Snipcart.unsubscribe('item.added');
        window.Snipcart.unsubscribe('item.adding');
        window.Snipcart.unsubscribe('item.updated');
        window.Snipcart.unsubscribe('item.removed');
        window.Snipcart.unsubscribe('order.completed');
    }

    render() {
        const { isFetching } = this.props;
        return (
            <>
                {!isFetching ?
                    <CartCounter cartRef={this.cartRef} {...this.props}/>
                    :
                    <Loader pad={"small"} size={25}/>
                }
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        isCartOpen: isCartOpen(state),
        cartQuantity: getCartQuantity(state),
        isFetching: isFetching(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openCart: () => dispatch(openCartSummary()),
        closeCart: () => dispatch(closeCartSummary()),
        updateCart: () => dispatch(updateCart()),
        updating: () => dispatch(updatingCart()),
        clearCart: () => dispatch(clearCart())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMenuContainer);
