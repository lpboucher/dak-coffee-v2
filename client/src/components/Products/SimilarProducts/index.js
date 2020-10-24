import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSimilarProducts } from '../../../hooks/products/useProducts';

import ProductsListingLayout from '../../../layouts/Products/ProductsListing';
import ProductCard from '../ProductCard';
import SkeletonCardList from '../../Share/Skeletons/SkeletonCardList';

const SimilarProducts = ({slug}) => {
  const { t } = useTranslation();
  const { similarProductIds } = useSimilarProducts(slug);
  return (
    <>
      { similarProductIds && similarProductIds.length > 0 ?
      <>
        <ProductsListingLayout
          heading={t("related-products")}
        >
          {similarProductIds.map((id, index) => (
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


export default SimilarProducts;

