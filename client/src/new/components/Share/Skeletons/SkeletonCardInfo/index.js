import React from "react";

import Skeleton from "react-loading-skeleton";

import ProductCardLayout from '../../../../layouts/Products/ProductCard';

const SkeletonCardInfo = ({height}) => {
    return (
      <ProductCardLayout
          feature={<Skeleton height={height}/>}
          info={
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          }
        >
        </ProductCardLayout>
    );
  };
  export default SkeletonCardInfo;
