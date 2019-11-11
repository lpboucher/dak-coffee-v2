import React, { Component, Suspense, lazy} from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import Hero from '../presentation/global/Hero';
import SubscriptionIntro from '../presentation/intros/Subscriptions';
import LimitedEditionsIntro from '../presentation/intros/LimitedEdition';

import Loader from '../utils/SimpleLoader';

const FeaturedProductsContainer = lazy(() => import('../containers/products/FeaturedProductsContainer'));
const ValuesIntro = lazy(() => import('../presentation/intros/Values'));
const BrewingIntro = lazy(() => import('../presentation/intros/Brewing'));
const NewsletterContainer = lazy(() => import('../containers/newsletter/NewsletterContainer'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896327/Heros/HeaderV2_gujmqi.jpg'

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
                            loc: "bottom-left",
                            width: "100vw",
                            height: "40vh"
                        }}
                    />
                }
                <SubscriptionIntro currency={currency} />
                <LimitedEditionsIntro />
                <Suspense fallback={<Loader />}>
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