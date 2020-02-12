import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import { schemaBuilder } from '../../utils/SEO/schema';

import SEO from '../../utils/SEO/SEO';
import ProductDetails from './ProductDetails';
import TwoColLayout from '../../layouts/TwoColLayout';

import { Box, Image } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';
import { singleProductLayout } from '../../layouts/globalResponsiveLayout';

const SingleProduct = ({product, currency, media}) => {
    const imageSRC = buildImageUrl(`Products/Mains/${product.main_image}`, 'f_auto,q_auto');
    const layout = singleProductLayout(media);
    const schema = schemaBuilder(
        'Product',
        `https://www.dakcoffeeroasters.com/shop/${product.slug}`,
        product.name,
        product.main_image,
        currency,
        product.price[currency.toLowerCase()]['value'],
        product.stock !== 0,
        product.slug
        );
    return (
        <>
            <SEO 
                keywords={[product.type, product.name, ...product.categories.map(cat => cat.name)]}
                schema={schema}
                canon={`https://www.dakcoffeeroasters.com/shop/${product.slug}`}
                url={`https://www.dakcoffeeroasters.com/shop/${product.slug}`}
            />
            <TwoColLayout 
                left={<Box pad={layout.imagePad} height="600px">
                        <Image fit="contain" src={imageSRC}/>
                    </Box>}
                right={<Box pad={layout.descPad}>
                        <ProductDetails currency={currency} {...product}/>
                    </Box>}
                pad={layout.wrapperPad}
                bgColor="mainWhite"
            />
        </>
    );
};

export default withResponsive(SingleProduct);