import React from 'react';
import { useArticles } from '../../../hooks/articles/useArticles';

import BlogListingLayout from '../../../layouts/Blog/BlogListing';
import BlogCard from '../../../components/Blog/BlogCard';
// import SkeletonCardList from '../../../components/Share/Skeletons/SkeletonCardList';

const BlogListing = () => {
  const { articleIds } = useArticles();
  return (
    <>
    { articleIds && articleIds.length > 0 ?
    <BlogListingLayout>
      {articleIds.map(id =>
        <BlogCard id={id} />
      )}
    </BlogListingLayout>
    :
    "Loading..."
    }
    </>
  )
}


export default BlogListing;

