import React from 'react';
import { useCategories } from '../../../hooks/categories/useCategories';
import { useFilteredProducts } from '../../../hooks/products/useProducts';

import Filter from '../../../components/Share/Filters';
import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

const FilteredProductsListing = () => {
  const { categories } = useCategories();
  const { productIds } = useFilteredProducts();
  return (
    <>
      <Filter filterType="products" allOptions={categories.map(cat => cat.name)}/>
      { productIds && productIds.length > 0 ?
      <>
        <ProductsListingLayout
          showMore={false}
        >
          {productIds.map((id, index) => (
            <ProductCard key={`${index}-${id}`} id={id} position={index}/>
          ))}
        </ProductsListingLayout>
      </>
      :
      <SkeletonCardList count={9} height={300} />
      }
    </>
  )
}


export default FilteredProductsListing;

