import React from 'react';

import { useSingleProduct } from '../../../hooks/products/useProducts';
import { useCurrency } from '../../../hooks/global/useCurrency';

import { getDisplayedProductPrice } from '../../../services/productDisplayService';

import ProductCardLayout from '../../../layouts/Products/ProductCard';
import CloudImage from '../../../utils/images/CloudImage';
import ProductCardInfo from '../ProductCardInfo';


const ProductCard = ({id}) => {
  const { currency } = useCurrency();
  const { thumb_image, price, medallion, displayedTitle, displayedSubtitle, displayedHelper } = useSingleProduct(id);
  const productPrice = getDisplayedProductPrice(price[currency.toLowerCase()]);
  const productImage = <CloudImage
                          img={`Products/Thumbs/${thumb_image}`}
                          maxWidth={500}
                          fit='contain'
                        />
  const info = <ProductCardInfo
                  id={id}
                  displayedPrice={productPrice}
                  title={displayedTitle}
                  subTitle={displayedSubtitle}
                  helper={displayedHelper}
                />
  return (
    <ProductCardLayout
      feature={productImage}
      info={info}
      medallion={medallion}
      /*linkTarget={}
      isClickable={}*/
    />
  )
}


export default ProductCard;

