import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCompilationProductsWithLimit } from '../../../hooks/products/useProducts';

import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

import { Button } from 'grommet';

const ProductsListing = ({compilation, limit=null}) => {
  const { t } = useTranslation();
  const { sortedProductsIds, activeCount, productCount, showMore } = useCompilationProductsWithLimit(compilation, limit);
  const ShowMore = <Button onClick={showMore} primary label={t("load-more")} type="button" />;
  return (
    <>
      { sortedProductsIds && sortedProductsIds.length > 0 ?
      <>
        <ProductsListingLayout
          moreButton={ShowMore}
          showMore={limit && activeCount < productCount}
        >
          {sortedProductsIds.map(({id, selected}, index) => (
            <ProductCard
              key={`${id}${selected ? '_' + selected : ''}`}
              id={id}
              position={index}
              selected={selected ? selected : null}
            />
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

