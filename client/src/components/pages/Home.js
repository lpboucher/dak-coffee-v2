import React, { Component, Suspense, lazy} from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import withCart from '../HOCs/withSnipcart';
//import { switchDisplayCurrency } from '../../../ducks/views';

import Hero from '../presentation/global/Hero';
import SubscriptionIntro from '../presentation/intros/Subscriptions';
import LimitedEditionsIntro from '../presentation/intros/LimitedEdition';

import Loader from '../utils/SimpleLoader';

const FeaturedProductsContainer = lazy(() => import('../containers/products/FeaturedProductsContainer'));
const ValuesIntro = lazy(() => import('../presentation/intros/Values'));
const BrewingIntro = lazy(() => import('../presentation/intros/Brewing'));

/*const NewsletterContainer = lazy(() => import('../../container/Newsletter/NewsletterContainer'));*/

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896327/Heros/HeaderV2_gujmqi.jpg'

class Home extends Component {
    /*componentDidMount() {
        fetch('http://ip-api.com/json/')
            .then(response => response.json())
            .then(data => {
                if(data.countryCode === 'US' || data.countryCode === 'CA') {
                    this.props.switchCurrency('CAD')
                }
            });
    }*/

    render() {
        const { media, snipcartAPI } = this.props;
        if (snipcartAPI) {
            console.log(snipcartAPI.items.count())
        }
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
                <SubscriptionIntro />
                <LimitedEditionsIntro />
                <Suspense fallback={<Loader />}>
                    <FeaturedProductsContainer collection='featured-products'/>
                    <ValuesIntro />
                    <BrewingIntro />
                </Suspense>
                    {/*
                    
                    <NewsletterContainer />
                    */}
            </>
        );
    }
}

/*function mapDispatchToProps(dispatch) {
    return {
        switchCurrency: (currency) => dispatch(switchDisplayCurrency(currency)),
    };
}*/

//export default withResponsive(connect(null, mapDispatchToProps)(Home));
export default withCart(withResponsive(Home));