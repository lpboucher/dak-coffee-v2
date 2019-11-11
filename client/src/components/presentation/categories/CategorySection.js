import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { categorySectionLayout } from '../../layouts/globalResponsiveLayout';
import ProductCardContainer from '../../containers/products/ProductCardContainer';

import { Box, Heading } from 'grommet';

const CategorySection = ({slug, products, media, t}) => {
    const layout = categorySectionLayout(media);
    const header = slug.split("_")[0] === "related" ? t(`sections.related.title`) : t(`sections.shop.${slug}`)
    return (
        <Box background={"lightGrey"}>
            <Heading level={1} size={layout.size} textAlign="center" style={{paddingTop: '48px'}}>{header}</Heading>
            <Box direction="row" pad="large" wrap>
                {products.map(product => 
                    <Box key={product.id} background="mainWhite" height="350px" width={layout.width} pad="medium" margin={'1%'}>
                        <ProductCardContainer id={product.id}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default withResponsive(withTranslation()(CategorySection));