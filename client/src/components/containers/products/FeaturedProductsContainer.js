import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchCollections, getCollections } from '../../../ducks/collections';
import { getProductsByCollection } from '../../../ducks/products';

import ProductGridLayout from '../../layouts/ProductGridLayout';

import Loader from '../../utils/SimpleLoader';

const FeaturedProductsContainer = ({collection}) => {
  const collections = useSelector(state => getCollections(state), shallowEqual);
  const productIds = useSelector(state => getProductsByCollection(state, collection));

  const dispatch = useDispatch();

  useEffect(() => {
    if (collections && collections.length < 1) dispatch(fetchCollections())
  }, [collections, dispatch]);

  return (
      <>
      {productIds && productIds.length > 0 ?
          <ProductGridLayout products={productIds}/>
          :
          <Loader />
      }
      </>
  )
}
export default FeaturedProductsContainer;
