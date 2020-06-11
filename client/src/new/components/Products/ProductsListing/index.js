import React, { useState } from 'react';
import { useProducts } from '../../../hooks/products/useProducts';

import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

import { Button } from 'grommet';

const ProductsListing = () => {
  const [count, setCount] = useState(9);
  const { sortedProductsIds, productCount } = useProducts([], count);
  const onShowMoreClicked = () => setCount(Math.min(count*2, productCount));
  const ShowMore = <Button onClick={onShowMoreClicked} primary label="Load More Products" type="button" />
  return (
    <>
      { sortedProductsIds && sortedProductsIds.length > 0 ?
      <>
        <ProductsListingLayout
          moreButton={ShowMore}
          showMore={count < productCount}
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

