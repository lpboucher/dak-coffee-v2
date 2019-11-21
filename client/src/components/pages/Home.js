import React, { Component } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import Hero from '../presentation/global/Hero';
import SubscriptionIntro from '../presentation/intros/Subscriptions';
import LimitedEditionsIntro from '../presentation/intros/LimitedEdition';
import FeaturedProductsContainer from '../containers/products/FeaturedProductsContainer';
import ValuesIntro from '../presentation/intros/Values';
import BrewingIntro from '../presentation/intros/Brewing';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

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
                <FeaturedProductsContainer collection='featured-products'/>
                <NewsletterContainer />
                <ValuesIntro />
                <BrewingIntro />    
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