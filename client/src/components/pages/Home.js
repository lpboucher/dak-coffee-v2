import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionIntro from '../presentation/intros/Subscriptions';

const LimitedEditionsIntro = lazy(() => import('../presentation/intros/LimitedEdition'));
const FeaturedProductsContainer = lazy(() => import('../containers/products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../presentation/intros/Values'));
const BrewingIntro = lazy(() => import('../presentation/intros/Brewing'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1575302886/Heros/Header_website_ggq9on.jpg'

class Home extends Component {
    render() {
        const { media, currency } = this.props;
        const isNotSmall = media === "medium" || media === "large" || media === "infinity";
        return (
            <>
                <SEO canon="https://www.dakcoffeeroasters.com" />
                {isNotSmall &&
                    <Hero
                        bgImage={header}
                        overlay={{
                            text: "hero.home",
                            loc: "bottom-left",
                            width: "100vw",
                            height: "40vh"
                        }}
                    />
                }
                <SubscriptionIntro currency={currency} />
                <Suspense fallback={<Loader />}>
                    <LimitedEditionsIntro />
                    <FeaturedProductsContainer collection='featured-products'/>
                    <NewsletterContainer />
                    <ValuesIntro />
                    <BrewingIntro /> 
                </Suspense>    
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