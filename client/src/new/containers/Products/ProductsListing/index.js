import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections, getCollections } from '../../../../ducks/collections';
import { getProductsByCollection } from '../../../../ducks/products';

import ProductsListing from '../../../components/Products/ProductsListing';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

const ProductsListingContainer = ({collection}) => {
    const collections = useSelector(state => getCollections(state));
    const productIds = useSelector(state => getProductsByCollection(state, collection));

    const dispatch = useDispatch();

    useEffect(() => {
        if (collections && collections.length < 1) {
            dispatch(fetchCollections());
        }
    }, [collections, dispatch]);

    return (
      <>
      { //productIds && productIds.length > 0 ?
        //<ProductsListing productIds={productIds} />
        //:
        <SkeletonCardList count={9} height={"300px"} />
      }
      </>
    )
}

export default ProductsListingContainer;
