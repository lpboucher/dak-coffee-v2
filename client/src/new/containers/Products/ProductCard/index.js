import React from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../../ducks/products';
import { getDisplayCurrency } from '../../../../ducks/views';

import ProductCard from '../../../components/Products/ProductCard';
import SkeletonCardInfo from '../../../components/Share/Skeletons/SkeletonCardInfo';

const ProductCardContainer = ({productId}) => {
    const product = useSelector(state => getProduct(state, productId));
    const currency = useSelector(state => getDisplayCurrency(state));

    return (
      <>
      { product ?
       <ProductCard currency={currency} {...product} />
       :
        <SkeletonCardInfo height={"300px"} />
      }
      </>
    )
}

export default ProductCardContainer;
