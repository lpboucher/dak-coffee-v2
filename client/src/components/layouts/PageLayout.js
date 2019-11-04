import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProducts, fetchProducts } from '../../ducks/products';
import { getSubscriptions, fetchSubscriptions } from '../../ducks/subscriptions';
import { isProcessing, getProcessingText, switchDisplayCurrency } from '../../ducks/views';
import { initializeCart } from '../../ducks/cart';
//import { hasError, getError, isProcessing, getProcessingText } from '../../ducks/views';

//import ErrorModal from '../utils/ErrorModal';
import FullLoader from '../utils/FullLoader';
import NavbarLayout from './NavbarLayout';
import MessageBar from '../presentation/global/MessageBar';
import LogoBar from '../presentation/global/LogoBar';
import TopNavBar from  '../presentation/nav/TopNavBar'
import SubNavBar from '../presentation/nav/SubNavBar';
import Footer from '../presentation/footer/Footer';

import { Text, Box } from 'grommet';

class PageLayout extends Component {
    componentDidMount() {
        const { products, plans } = this.props;
        if (products.length < 1) this.props.fetchProducts();
        if (plans.length < 1) this.props.fetchSubscriptions();
        this.props.initialize();
    }

    componentWillUnmount() {
        window.Snipcart.unsubscribe('cart.ready');
    }

    render() {
        //const { processing, error, children } = this.props;
        const { processing, children } = this.props;
        return (
            <Fragment>
                {/*error.hasError &&
                    <ErrorModal error={error.errorMsg.global} />
                */}
                {processing.isProcessing &&
                    <FullLoader text={processing.processingText} />
                }
                <NavbarLayout
                    message={<MessageBar text="announcement.text" loc="announce"/>}
                    logo={<LogoBar loc="logo" />}
                    topNav={<TopNavBar loc="topNav"/>}
                    subNav={<SubNavBar loc="subNav"/>}
                />
                {children}
                <Footer />
            </Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        processing: {
            isProcessing: isProcessing(state),
            processingText: getProcessingText(state),
        },
        /*
        error: {
            hasError: hasError(state),
            errorMsg: getError(state)
        },*/
        products: getProducts(state),
        plans: getSubscriptions(state)
        //cartItems: getCartItems(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchSubscriptions: () => dispatch(fetchSubscriptions()),
        switchCurrency: (curr) => dispatch(switchDisplayCurrency(curr)),
        initialize: () => dispatch(initializeCart())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);

