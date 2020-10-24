import React from "react";

import ProductsListingLayout from '../../../../layouts/Products/ProductsListing';
import SkeletonCardInfo from '../../../Share/Skeletons/SkeletonCardInfo';

const SkeletonCardList = ({count, height, width}) => {
    return (
      <ProductsListingLayout>
        {Array(count)
          .fill()
          .map((item, index) => (
          <SkeletonCardInfo
              key={`skel${index}_${count}`}
              height={height}
          />
        ))}
      </ProductsListingLayout>
    );
  };
  export default SkeletonCardList;
