import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import SEO from '../utils/SEO/SEO';
import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionIntro from '../presentation/intros/Subscriptions';
import CoffeeProductsContainer from '../containers/products/CoffeeProductsContainer';

const LimitedEditionsIntro = lazy(() => import('../presentation/intros/LimitedEdition'));
const FeaturedProductsContainer = lazy(() => import('../containers/products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../presentation/intros/Values'));

const header = 'Heros/Header_mainpage_n4krkg.jpg';
const headerSmall = 'Heros/mobileheader_l26qwl.jpg'

class Home extends Component {
    render() {
        const { media, currency } = this.props;
        const isNotSmall = media === "medium" || media === "large" || media === "infinity";
        return (
            <>
                <SEO canon="https://www.dakcoffeeroasters.com" />
                {isNotSmall ?
                    <Hero
                        bgImage={header}
                        overlay={{
                            text: "hero.home",
                            loc: "bottom-left",
                            width: "50vw",
                            height: "40vh",
                            cta: "hero.cta.shop",
                        }}
                        ctaLink='/shop'
                    />
                    :
                    <Hero
                        bgImage={headerSmall}
                        overlay={{
                            text: "hero.home",
                            loc: "top",
                            width: "100vw",
                            height: "40vh",
                        }}
                        height="90vh"
                        override
                    />
                }
                <CoffeeProductsContainer collection='coffee-products'/>
                <SubscriptionIntro currency={currency} />
                <Suspense fallback={<Loader />}>
                    <LimitedEditionsIntro />
                    <FeaturedProductsContainer collection='featured-products'/>
                    <NewsletterContainer />
                    <ValuesIntro />
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
