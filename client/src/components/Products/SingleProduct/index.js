import React from 'react';

import SingleProductLayout from '../../../layouts/Products/SingleProduct';
import CloudImage from '../../../utils/images/CloudImage';
import ProductDetails from '../ProductDetails';

const SingleProduct = ({id, image}) => {
  const productImage = <CloudImage
                          img={`Products/Mains/${image}`}
                          maxWidth={720}
                          fit='contain'
                        />
  const details = <ProductDetails id={id}/>
  return (
    <SingleProductLayout
      feature={productImage}
      productDetails={details}
    />
  )
}


export default SingleProduct;

