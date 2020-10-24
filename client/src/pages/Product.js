import React from 'react';
import { useCurrency } from '../hooks/global/useCurrency';
import { useSingleProductPage } from '../hooks/products/useProducts';

import { schemaBuilder } from '../utils/seo/schema';

import SEO from '../utils/seo/SEO';
import SingleProduct from '../components/Products/SingleProduct';
import SimilarProducts from '../components/Products/SimilarProducts';
import SkeletonSingleProduct from '../components/Share/Skeletons/SkeletonSingleProduct';

const Product = ({ match }) => {
  const { slug, model } = match.params;
  const { currency } = useCurrency();
  const { id, name, images, price, type } = useSingleProductPage(slug, model);
  const priceInCurrency = price && price.find(onePrice => onePrice.base.currency === currency.toLowerCase());
  const schema = images && schemaBuilder(
    'Product',
    `https://www.dakcoffeeroasters.com/shop/${slug}`,
    name,
    images.main,
    currency,
    price && priceInCurrency.base.value,
    true,
    slug
  );
  return (
    <>
    {price &&
      <>
        <SEO
          keywords={[type, name]}
          schema={schema}
          canon={`https://www.dakcoffeeroasters.com/shop/${slug}`}
          url={`https://www.dakcoffeeroasters.com/shop/${slug}`}
        />
        {id && images ?
        <SingleProduct id={id} image={images.main} />
        :
        <SkeletonSingleProduct />
        }
        <SimilarProducts slug={slug} />
      </>
    }
    </>
  );
}

export default Product;
