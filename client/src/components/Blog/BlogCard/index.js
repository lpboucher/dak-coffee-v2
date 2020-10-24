import React from 'react';

import { useSingleArticle } from '../../../hooks/articles/useArticles';

import BlogCardLayout from '../../../layouts/Blog/BlogCard';
import CloudImage from '../../../utils/images/CloudImage';
import Skeleton from 'react-loading-skeleton';
import { Text } from "grommet";

const BlogCard = ({id}) => {
  const {title, thumb, slug} = useSingleArticle(id);
  const articleImage = thumb && <CloudImage
                          img={`Articles/Thumbs/${thumb}`}
                          maxWidth={500}
                          fit='contain'
                        />
  const info = title && <Text>{title.en}</Text>
  return (
    <>
      {title && thumb ?
        <BlogCardLayout
          feature={articleImage}
          info={info}
          linkTarget={`/blog/${slug}`}
          isClickable={true}
        />
        :
        <Skeleton height={300} width={400}/>
      }
    </>
  )
}

export default BlogCard;

