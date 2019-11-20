import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import ProductDetails from './ProductDetails';
import TwoColLayout from '../../layouts/TwoColLayout';

import { Box, Image } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';
import { singleProductLayout } from '../../layouts/globalResponsiveLayout';

const SingleProduct = ({product, currency, media}) => {
    const imageSRC = buildImageUrl(`Products/Mains/${product.main_image}`);
    const layout = singleProductLayout(media)
    return (
        <>
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