import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getProducts, fetchProducts } from '../../ducks/products';
import { getSubscriptions, fetchSubscriptions } from '../../ducks/subscriptions';
import { switchDisplayCurrency, openPromotion } from '../../ducks/views';
import { initializeCart } from '../../ducks/cart';
import { schemaBuilder } from '../utils/SEO/schema';

import SEO from '../utils/SEO/SEO';
import ErrorContainer from '../containers/global/ErrorContainer';
import LoaderContainer from '../containers/global/LoaderContainer';
//import AnnouncementContainer from '../containers/global/AnnouncementContainer';
import NavbarLayout from './NavbarLayout';
import MessageBar from '../presentation/global/MessageBar';
import LogoBar from '../presentation/global/LogoBar';
import TopNavBar from  '../presentation/nav/TopNavBar'
import SubNavBar from '../containers/nav/SubNavContainer';
import Footer from '../presentation/footer/Footer';

const message = <MessageBar text="announcement.text" loc="announce"/>;
const logo = <LogoBar loc="logo" />;
const topNav = <TopNavBar loc="topNav"/>;
const subNav = <SubNavBar loc="subNav"/>;

class PageLayout extends PureComponent {

    componentDidMount() {
        const { products, plans } = this.props;
        if (products.length < 1) this.props.fetchProducts();
        if (plans.length < 1) this.props.fetchSubscriptions();
        this.props.initialize();
        setTimeout(() => this.props.openModal(), 5000);
    }

    componentWillUnmount() {
        window.Snipcart.unsubscribe('cart.ready');
    }

    render() {
        const schema = schemaBuilder('WebSite', 'https://dakcoffeeroasters.com')
        return (
            <>
                <SEO 
                    title={'Specialty coffee, roasted in Amsterdam - Dak Coffee Roasters'}
                    description={'Order or subscribe to premium varieties of high quality specialty coffee delivered right to your door'}
                    keywords={['coffee', 'coffee beans']}
                    schema={schema}
                />
                <ErrorContainer />
                <LoaderContainer />
                {//<AnnouncementContainer />
                }
                <NavbarLayout
                    message={message}
                    logo={logo}
                    topNav={topNav}
                    subNav={subNav}
                />
                {this.props.children}
                <Footer />
            </>
        );
    }
};

function mapStateToProps(state) {
    return {
        products: getProducts(state),
        plans: getSubscriptions(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchSubscriptions: () => dispatch(fetchSubscriptions()),
        switchCurrency: (curr) => dispatch(switchDisplayCurrency(curr)),
        initialize: () => dispatch(initializeCart()),
        openModal: () => dispatch(openPromotion())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);

