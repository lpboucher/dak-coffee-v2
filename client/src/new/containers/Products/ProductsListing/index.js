import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProductsFromTypes } from '../../../../ducks/products';

import ProductsListing from '../../../components/Products/ProductsListing';
import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

const ProductsListingContainer = ({productTypes = []}) => {
    const productIds = useSelector(state => getProductsFromTypes(state, productTypes));

    const dispatch = useDispatch();

    useEffect(() => {
        if (productIds && productIds.length < 1) {
            dispatch(fetchProducts());
        }
    }, []);

    return (
      <>
      { productIds && productIds.length > 0 ?
        <ProductsListing productIds={productIds} />
        :
        <SkeletonCardList count={9} height={"300px"} />
      }
      </>
    )
}

export default ProductsListingContainer;
