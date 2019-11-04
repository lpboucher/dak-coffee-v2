import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';

import { categorySectionLayout } from '../../layouts/globalResponsiveLayout';
import ProductCard from '../products/ProductCard';

import { Box, Heading } from 'grommet';

const CategorySection = ({name, slug, products, currency, media, t}) => {
    const limitedProducts = 3;
    const layout = categorySectionLayout(media);
    const header = slug.split("_")[0] === "related" ? t(`sections.related.title`) : t(`sections.shop.${slug}`)
    return (
        <Box background={"lightGrey"}>
            <Heading level={1} size={layout.size} textAlign="center" style={{paddingTop: '48px'}}>{header}</Heading>
            <Box direction="row" pad="large" wrap>
                {products.slice(0,limitedProducts).map(product => 
                    <Box key={product.id} background="mainWhite" height="350px" width={layout.width} pad="medium" margin={'1%'}>
                        <ProductCard currency={currency} {...product}/>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default withResponsive(withTranslation()(CategorySection));