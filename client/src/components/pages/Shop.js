import React, { Component } from 'react';
import { connect } from 'react-redux';
import withResponsive from '../HOCs/withResponsive';
import { getDisplayCurrency } from '../../ducks/views';

import SubscriptionBanner from '../presentation/products/SubscriptionBanner';
import CategoriesContainer from '../containers/categories/ProductCategoriesContainer';

import { Box } from 'grommet';

import { shopPageLayout } from '../layouts/globalResponsiveLayout';

class Shop extends Component {
    render() {
        const { media, currency } = this.props;
        const layout = shopPageLayout(media);
        return (
            <>
                <Box pad={{top: layout.padTop}} margin={{bottom: "large", right: "large"}} width={layout.width}>
                    <SubscriptionBanner isMobile={media === "extraSmall" || media === "small"} currency={currency}/>
                </Box>
                <CategoriesContainer />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        currency: getDisplayCurrency(state),
    };
}


export default withResponsive(connect(mapStateToProps, null)(Shop));