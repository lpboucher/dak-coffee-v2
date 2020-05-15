import React from 'react';

import { getDisplayedProductTitle } from '../../../services/productDisplayService';

import ProductCardLayout from '../../../layouts/Products/ProductCard';
import CloudImage from '../../../../components/utils/CloudImage';
import ProductCardInfo from '../ProductCardInfo';

const ProductCard = ({thumb_image, type, slug}) => {
  const productTitle = getDisplayedProductTitle(type, slug);
  const productImage = <CloudImage
                          img={`Products/Thumbs/${thumb_image}`}
                          maxWidth={500}
                          fit='contain'
                        />
  const info = <ProductCardInfo
                  displayedPrice={"10 EUR"}
                  title={productTitle}
                  subTitle={productTitle}
                />
  return (
    <ProductCardLayout
      feature={productImage}
      info={info}
      /*linkTarget={}
      isClickable={}*/
    />
  )
}


export default ProductCard;

