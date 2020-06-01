import React from 'react';

import { getDisplayedProductTitle, getDisplayedProductPrice } from '../../../services/productDisplayService';

import ProductCardLayout from '../../../layouts/Products/ProductCard';
import CloudImage from '../../../utils/images/CloudImage';
import ProductCardInfo from '../ProductCardInfo';

const ProductCard = ({id, thumb_image, type, slug, price, currency}) => {
  const productTitle = getDisplayedProductTitle(type, slug);
  const productPrice = getDisplayedProductPrice(price[currency.toLowerCase()]);
  const productImage = <CloudImage
                          img={`Products/Thumbs/${thumb_image}`}
                          maxWidth={500}
                          fit='contain'
                        />
  const info = <ProductCardInfo
                  id={id}
                  displayedPrice={productPrice}
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

