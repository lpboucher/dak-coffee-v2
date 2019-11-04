import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { isCartOpen, isFetching, openCartSummary, closeCartSummary } from '../../../ducks/views';
import { getCartQuantity, updateCart, updatingCart } from '../../../ducks/cart';

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
        });
        /*window.Snipcart.subscribe('user.loggedout', () => {
            console.log('User logged out');
         });*/
    }

    componentWillUnmount() {
        window.Snipcart.unsubscribe('item.added');
        window.Snipcart.unsubscribe('item.adding');
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
        updating: () => dispatch(updatingCart())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMenuContainer);