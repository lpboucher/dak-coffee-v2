import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections, getCollections } from '../../../../ducks/collections';
import { getProductsByCollection } from '../../../../ducks/products';

import ProductSliderLayout from '../../../layouts/new/ProductsSliderLayout';
import ProductCard from '../../../presentation/products/new/ProductCard';

import Loader from '../../../utils/SimpleLoader';

const ProductCollection= ({collection}) => {
  const collections = useSelector(state => getCollections(state));
  const productIds = useSelector(state => getProductsByCollection(state, collection));

  const dispatch = useDispatch();

  useEffect(() => {
    if (collections && collections.length < 1) dispatch(fetchCollections())
  }, [collections]);

  return (
      <>
      {productIds && productIds.length > 0 ?
          <ProductSliderLayout
              slides={
                productIds.map(id => <ProductCard key={id} productId={id} />)
              }
            >
          </ProductSliderLayout>
          :
          <Loader />
      }
      </>
  )
}
export default ProductCollection;
