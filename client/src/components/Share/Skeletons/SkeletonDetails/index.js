import React from "react";

import Skeleton from "react-loading-skeleton";

import ProductDetailsLayout from '../../../../layouts/Products/ProductDetails';

const SkeletonDetails = () => {
    return (
      <ProductDetailsLayout
        title={<Skeleton />}
        staticPrice={<Skeleton />}
        description={<Skeleton />}
        hasProductOptions={false}
        mainDropdown={<Skeleton />}
        form={<Skeleton />}
      />
    );
  };
  export default SkeletonDetails;
