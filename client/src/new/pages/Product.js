import React from 'react';
import { useCurrency } from '../hooks/global/useCurrency';
import { useSingleProduct } from '../hooks/products/useProducts';

import { schemaBuilder } from '../utils/seo/schema';

import SEO from '../utils/seo/SEO';
import SingleProduct from '../components/Products/SingleProduct';
import RelatedProducts from '../components/Products/RelatedProducts';

const Product = ({ match }) => {
  const { slug } = match.params;
  const { currency } = useCurrency();
  const { id, name, main_image, price, type, categories } = useSingleProduct(null, slug);
  const schema = schemaBuilder(
    'Product',
    `https://www.dakcoffeeroasters.com/shop/${slug}`,
    name,
    main_image,
    currency,
    price && price[currency.toLowerCase()]['value'],
    // product.stock !== 0, make sure to readd
    slug
  );
  return (
    <>
    {price &&
      <>
        <SEO
          keywords={[type, name, ...categories.map(cat => cat.name)]}
          schema={schema}
          canon={`https://www.dakcoffeeroasters.com/shop/${slug}`}
          url={`https://www.dakcoffeeroasters.com/shop/${slug}`}
        />
        <SingleProduct id={id} image={main_image} />
        <RelatedProducts slug={`related_${slug}`} />
      </>
    }
    </>
  );
}

export default Product;
