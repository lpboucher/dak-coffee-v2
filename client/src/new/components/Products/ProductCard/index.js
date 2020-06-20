import React from 'react';

import { useSingleProduct } from '../../../hooks/products/useProducts';
import { useCart } from '../../../hooks/cart/useCart';
import { useCurrency } from '../../../hooks/global/useCurrency';

import { getDisplayedProductPrice } from '../../../services/productDisplayService';

import ProductCardLayout from '../../../layouts/Products/ProductCard';
import CloudImage from '../../../utils/images/CloudImage';
import ProductCardInfo from '../ProductCardInfo';

const ProductCard = ({id}) => {
  const { currency } = useCurrency();
  const { thumb_image, price, medallion, displayedTitle, displayedSubtitle, displayedHelper, slug } = useSingleProduct(id);
  const { productAdding } = useCart(id);
  const productPrice = price && getDisplayedProductPrice(price[currency.toLowerCase()]);
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
                  adding={productAdding}
                />
  return (
    <ProductCardLayout
      feature={productImage}
      info={info}
      medallion={medallion}
      linkTarget={`shop/${slug}`}
      isClickable={true}
    />
  )
}


export default ProductCard;

