import React from 'react';
import { useResponsive } from '../../../hooks/utils/useResponsive';
import { useCategories } from '../../../hooks/categories/useCategories';
import { useFilteredProducts } from '../../../hooks/products/useProducts';

import Filter from '../../../components/Share/Filters';
import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

const FilteredProductsListing = () => {
  const { greaterThan } = useResponsive();
  const { categoryOptions } = useCategories();
  const { categoryProducts } = useFilteredProducts();
  return (
    <>
      {greaterThan.medium && <Filter filterType="products" allOptions={categoryOptions}/>}
      { categoryProducts && categoryProducts.length > 0 ?
        <>
          {categoryProducts.map(category =>
            (category.products.length > 0 &&
              <ProductsListingLayout
                key={`filter-${category.slug}`}
                showMore={false}
                heading={category.displayName}
              >
                {category.products.map((id, index) => (
                  <ProductCard key={`${index}-${category.slug}-${id}`} id={id} position={index}/>
                ))}
              </ProductsListingLayout>
            )
          )}
      </>
      :
      <SkeletonCardList count={9} height={300} />
      }
    </>
  )
}


export default FilteredProductsListing;

