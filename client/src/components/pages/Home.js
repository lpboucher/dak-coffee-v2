import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import Hero from '../presentation/global/Hero';
import Loader from '../utils/SimpleLoader';
import SubscriptionIntro from '../presentation/intros/Subscriptions';
import CoffeeProductsContainer from '../containers/products/CoffeeProductsContainer';

const LimitedEditionsIntro = lazy(() => import('../presentation/intros/LimitedEdition'));
const FeaturedProductsContainer = lazy(() => import('../containers/products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../presentation/intros/Values'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565717609/Heros/Header_Aboutus_qwdlkf.jpg'

class Home extends Component {
    render() {
        const { media, currency } = this.props;
        const isNotSmall = media === "medium" || media === "large" || media === "infinity";
        return (
            <>
                {isNotSmall &&
                    <Hero
                        bgImage={header}
                        overlay={{
                            text: "hero.home",
                            loc: "left",
                            width: "100vw",
                            height: "40vh",
                            cta: "hero.cta.shop"
                        }}
                        ctaLink='/shop'
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