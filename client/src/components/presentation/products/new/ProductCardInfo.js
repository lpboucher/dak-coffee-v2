import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getProduct } from '../../../../ducks/products';
import { getDisplayCurrency } from '../../../../ducks/views';

import { getPriceRange } from '../../../utils/Format/priceFormatter';

import AddToCart from '../../../containers/cart/AddToCartContainer';

import CardLabelLayout from '../../../layouts/new/CardLabelLayout';
import Truncate from '../../../utils/new/Truncate';

import { Text } from 'grommet';

const ProductCard = ({productId}) => {
    const { t } = useTranslation();
    const { type, slug, price } = useSelector(state => getProduct(state, productId));
    const currency = useSelector(state => getDisplayCurrency(state));
    const outputPrice = getPriceRange(price, currency);

    return (
        <>
        {price &&
        <CardLabelLayout
          productInfo={
            <>
              <Truncate
                textAlign="start"
                //size={layout.fontSize.top}
                weight="bold"
                style={{textTransform: 'uppercase'}}
              >
                {`${t(`products:${type}.${slug}.name`)}${type === "coffee" ? ` - ${t(`products:${type}.${slug}.country`)}` : ''}`}
              </Truncate>
              {type === "coffee" &&
                  <Truncate
                    textAlign="start"
                    //size={layout.fontSize.mid}
                    color="grey"
                  >
                    {t(`products:${type}.${slug}.taste`)}
                  </Truncate>
              }
              <Text
                textAlign="start"
                weight="bold"
                //size={layout.fontSize.bottom}
                color="mainDark"
              >
                {outputPrice}
              </Text>
            </>
          }
          callToAction={
            <AddToCart productId={productId} currency={currency}/>
          }
        />
        }
        </>
    )
}

export default ProductCard;
