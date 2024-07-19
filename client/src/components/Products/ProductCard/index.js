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
    displayedPrice,
    additionalOptions,
    cartPrice,
  } = useSingleProduct(id, selected);
  console.log(
    "LOGGING SINGLE PRODUCT",
    type,
    displayedTitle,
    additionalOptions,
    cartPrice,
    slug,
    selected,
  );
  const { productAdding } = useCart(id);
  const productRoastOptions = additionalOptions.find((option) => option.name === "roast");
  const linkQuery = {
    coffee: `?quantity=${cartPrice ? Object.keys(cartPrice)[0] : "250g"}&roast=${selected && selected.roast ? selected.roast : productRoastOptions.options[0].value}`,
    subscription: `?quantity=2x250g${selected ? "&roast=" + selected.split("-")[0] : ""}`,
    clothing: `?size=${selected && selected.size ? selected.size : "S"}&color=${selected && selected.color ? selected.color : "Navy"}`,
    crewneck: `?size=${selected && selected.size ? selected.size : "S"}&color=${selected && selected.color ? selected.color : "White"}`,
    "nitro-crew": `?size=${selected && selected.size ? selected.size : "S"}&color=${selected && selected.color ? selected.color : "Green"}`,
    "t-shirt": `?size=${selected && selected.size ? selected.size : "S"}&color=${selected && selected.color ? selected.color : "White"}`,
    "roasting-tee": `?size=${selected && selected.size ? selected.size : "S"}&color=${selected && selected.color ? selected.color : "Opal Grey"}`,
    "brewing-tee": `?size=${selected && selected.size ? selected.size : "S"}&color=${selected && selected.color ? selected.color : "Cream Grey"}`
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
      linkTarget={`/shop/${type === "clothing" || type === "t-shirt" ? "merchandise" : type}/${slug}${linkQuery[type] || ""}`}
      isClickable={true}
      background="#f7f6f4"
    />
    :
    <Skeleton height={300} width={400}/>
  }
  </>
  )
}

export default ProductCard;

