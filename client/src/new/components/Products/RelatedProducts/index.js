import React from 'react';
import { useRelatedProducts } from '../../../hooks/products/useProducts';

import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

const RelatedProducts = ({slug}) => {
  const { relatedProductIds } = useRelatedProducts(slug);
  return (
    <>
      { relatedProductIds && relatedProductIds.length > 0 ?
      <>
        <ProductsListingLayout>
          {relatedProductIds.map((id, index) => (
            <ProductCard key={id} id={id} position={index}/>
          ))}
        </ProductsListingLayout>
      </>
      :
      <SkeletonCardList count={3} height={300} />
      }
    </>
  )
}


export default RelatedProducts;

