import React from "react";

import Skeleton from "react-loading-skeleton";

import SingleProductLayout from '../../../../layouts/Products/SingleProduct';
import SkeletonDetails from '../../../Share/Skeletons/SkeletonDetails';

const SkeletonSingleProduct = () => {
    return (
      <SingleProductLayout
        feature={<Skeleton height={400}/>}
        productDetails={<SkeletonDetails />}
      />
    );
  };
  export default SkeletonSingleProduct;
