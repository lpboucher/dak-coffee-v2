import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../../components/HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import SEO from '../../components/utils/SEO/SEO';
import Hero from '../../components/presentation/global/Hero';
import Loader from '../../components/utils/SimpleLoader';
import SubscriptionIntro from '../../components/presentation/intros/Subscriptions';
import CoffeeProductsContainer from '../../components/containers/products/CoffeeProductsContainer';
import HeroSlider from '../components/HeroSlider';
import Quote from '../components/Share/Quote';
import ProductsListingContainer from '../containers/Products/ProductsListing';

/*const LimitedEditionsIntro = lazy(() => import('../../components/presentation/intros/LimitedEdition'));
const FeaturedProductsContainer = lazy(() => import('../../components/containers/products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../../components/containers/newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../../components/presentation/intros/Values'));
*/
const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto/v1565717609/Heros/DaybedHeader_bkct6u.jpg'

class Home extends Component {
    render() {
        const { media, currency } = this.props;
        const isNotSmall = media === "medium" || media === "large" || media === "infinity";
        return (
            <>
                <SEO canon="https://www.dakcoffeeroasters.com" />
                <HeroSlider />
                {/*isNotSmall &&
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
                      */}
                <Quote quote="hero.home"/>
                <ProductsListingContainer productTypes={["coffee"]}/>
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
