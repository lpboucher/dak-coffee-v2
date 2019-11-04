import React, { Fragment } from 'react';

import ProductDetails from './ProductDetails';
import TwoColLayout from '../../layouts/TwoColLayout';

import { Box, Image } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const SingleProduct = ({product, currency}) => {
    const imageSRC = buildImageUrl(`Products/Mains/${product.main_image}`, 'product_main');
    return (
        <Fragment>
            <TwoColLayout 
                left={<Box pad="large" height="600px">
                        <Image fit="contain" src={imageSRC}/>
                    </Box>}
                right={<ProductDetails currency={currency} {...product}/>}
                pad={{outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}}
                bgColor="mainWhite"
            />
        </Fragment>
    );
};

export default SingleProduct;