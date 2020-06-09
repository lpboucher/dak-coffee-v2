import React from 'react';

import { useSingleProduct } from '../../../hooks/products/useProducts';
import { useCurrency } from '../../../hooks/global/useCurrency';

import { getDisplayedProductTitle, getDisplayedProductPrice } from '../../../services/productDisplayService';

import ProductCardLayout from '../../../layouts/Products/ProductCard';
import CloudImage from '../../../utils/images/CloudImage';
import ProductCardInfo from '../ProductCardInfo';


const ProductCard = ({id}) => {
  const { currency } = useCurrency();
  const { thumb_image, type, slug, price } = useSingleProduct(id);
  const { title, subtitle, helper } = getDisplayedProductTitle(type, slug);
  const productPrice = getDisplayedProductPrice(price[currency.toLowerCase()]);
  const productImage = <CloudImage
                          img={`Products/Thumbs/${thumb_image}`}
                          maxWidth={500}
                          fit='contain'
                        />
  const info = <ProductCardInfo
                  id={id}
                  displayedPrice={productPrice}
                  title={title}
                  subTitle={subtitle}
                  helper={helper}
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

