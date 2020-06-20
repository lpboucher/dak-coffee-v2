import React from 'react';
import { useProductsWithLimit } from '../../../hooks/products/useProducts';

import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

import { Button } from 'grommet';

const ProductsListing = ({limit=null}) => {
  const { sortedProductsIds, activeCount, productCount, showMore } = useProductsWithLimit(limit);
  const ShowMore = <Button onClick={showMore} primary label="Load More Products" type="button" />
  return (
    <>
      { sortedProductsIds && sortedProductsIds.length > 0 ?
      <>
        <ProductsListingLayout
          moreButton={ShowMore}
          showMore={limit && activeCount < productCount}
        >
          {sortedProductsIds.map((id, index) => (
            <ProductCard key={id} id={id} position={index}/>
          ))}
        </ProductsListingLayout>
      </>
      :
      <SkeletonCardList count={9} height={300} />
      }
    </>
  )
}


export default ProductsListing;

