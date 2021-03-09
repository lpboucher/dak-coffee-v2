import React from 'react';

import { useSingleProduct } from '../../../hooks/products/useProducts';
import { useCart } from '../../../hooks/cart/useCart';

import ProductCardLayout from '../../../layouts/Products/ProductCard';
import CloudImage from '../../../utils/images/CloudImage';
import ProductCardInfo from '../ProductCardInfo';
import Skeleton from 'react-loading-skeleton';

const ProductCard = ({id, selected}) => {
  const {
    images,
    price,
    medallion,
    displayedTitle,
    displayedSubtitle,
    displayedHelper,
    slug,
    type,
    displayedPrice
  } = useSingleProduct(id, selected);
  const { productAdding } = useCart(id);
  const linkQuery = {
    coffee: "?quantity=250g",
    subscription: `?quantity=2x250g${selected ? "&roast=" + selected.split("-")[0] : ""}`
  }
  const productImage = images && <CloudImage
                          img={`Products/Thumbs/${images.thumb}`}
                          maxWidth={500}
                          fit='contain'
                        />
  const info = <ProductCardInfo
                  id={id}
                  displayedPrice={displayedPrice}
                  title={displayedTitle}
                  subTitle={displayedSubtitle}
                  helper={displayedHelper}
                  adding={productAdding}
                  selected={selected ? {quantity: "2x250g", roast: selected} : null}
                />
  return (
    <>
  {images && price ?
    <ProductCardLayout
      feature={productImage}
      info={info}
      medallion={medallion}
      linkTarget={`/shop/${type}/${slug}${linkQuery[type] || ""}`}
      isClickable={true}
      background={slug === "alchemist" ? "#628082" : "#f7f6f4"}
    />
    :
    <Skeleton height={300} width={400}/>
  }
  </>
  )
}

export default ProductCard;

