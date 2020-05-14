import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionIntro from '../presentation/intros/Subscriptions';
import CoffeeProductsContainer from '../containers/products/CoffeeProductsContainer';
import HeroSliderLayout from '../layouts/new/HeroSliderLayout';

/*const LimitedEditionsIntro = lazy(() => import('../presentation/intros/LimitedEdition'));
const FeaturedProductsContainer = lazy(() => import('../containers/products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../presentation/intros/Values'));*/

const header = 'Heros/Header_mainpage_n4krkg.jpg';

class Home extends Component {
    render() {
        const { media, currency } = this.props;
        const isNotSmall = media === "medium" || media === "large" || media === "infinity";
        return (
            <>
                <SEO canon="https://www.dakcoffeeroasters.com" />
                <HeroSliderLayout />
                <CoffeeProductsContainer collection='coffee-products'/>
                <SubscriptionIntro currency={currency} />
                {/*<Suspense fallback={<Loader />}>
                    <LimitedEditionsIntro />
                    <FeaturedProductsContainer collection='featured-products'/>
                    <NewsletterContainer />
                    <ValuesIntro />
        </Suspense>*/}
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        currency: getDisplayCurrency(state),
    };
}

export default withResponsive(connect(mapStateToProps, null)(Home));
