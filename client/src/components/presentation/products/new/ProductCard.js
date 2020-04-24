import React from 'react';
import { useSelector } from 'react-redux';
import { getProductFeature } from '../../../../ducks/products';

import ProductCardLayout from '../../../layouts/new/ProductCardLayout';
import ProductFeature from '../../../presentation/products/new/ProductFeature';
import ProductCardInfo from '../../../presentation/products/new/ProductCardInfo';

import Loader from '../../../utils/SimpleLoader';

const ProductCard = ({productId}) => {
    const productFeature = useSelector(state => getProductFeature(state, productId));

    return (
        <>
        {productFeature ?
        <ProductCardLayout
          linkTarget={`/shop/${productFeature.slug}`}
          isClickable={productFeature.stock != 0}
          feature={
            <ProductFeature
              name={productFeature.name}
              thumb_image={productFeature.thumb_image}
              stock={productFeature.stock}
            />
          }
          info={
            <ProductCardInfo productId={productId} />
          }
        />
        :
          <Loader />
        }
        </>
    )
}

export default ProductCard;
