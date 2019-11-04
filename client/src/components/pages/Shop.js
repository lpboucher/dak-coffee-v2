import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import SubscriptionBanner from '../presentation/products/SubscriptionBanner';
import CategoriesContainer from '../containers/categories/ProductCategoriesContainer';

import { Box } from 'grommet';

import { shopPageLayout } from '../layouts/globalResponsiveLayout';

const Shop = ({media}) => {
    const layout = shopPageLayout(media);
    return (
    <>
        <Box pad={{top: layout.padTop}} margin={{bottom: "large", right: "large"}} width={layout.width}>
            <SubscriptionBanner isMobile={media === "extraSmall" || media === "small"}/>
        </Box>
        <CategoriesContainer />
    </>
    );
};

export default withResponsive(Shop);