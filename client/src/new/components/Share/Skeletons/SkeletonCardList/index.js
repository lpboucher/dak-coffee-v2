import React from "react";

import Skeleton from "react-loading-skeleton";

import ProductsListingLayout from '../../../../layouts/Products/ProductsListing';
import ProductCardLayout from '../../../../layouts/Products/ProductCard';

const SkeletonCardList = ({count, height, width}) => {
    return (
      <ProductsListingLayout>
        {Array(count)
          .fill()
          .map((item, index) => (
        <ProductCardLayout
          key={`skel${index}_${count}`}
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
        ))}
      </ProductsListingLayout>
    );
  };
  export default SkeletonCardList;
