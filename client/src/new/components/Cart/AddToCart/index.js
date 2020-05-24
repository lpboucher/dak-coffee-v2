import React from 'react';

import SnipcartAdd from '../../../layouts/Cart/AddToCart'
import AddButtonContainer from '../../../containers/Cart/AddToCart/AddButton';

import { getCartProductPrice, getCartProductOptions } from '../../../services/productDataService';
import { getDisplayedProductDescription } from '../../../services/productDisplayService';

const AddToCart = ({id, name, price, slug, type, currency}) => {
  const priceString = getCartProductPrice(price);
  const translatedDescription = getDisplayedProductDescription(type, slug);
  // need to also add data interval for subscriptions
  // DO NOT FORGET TO ADD TYPE PROPERTY ON SUBSCRIPTION DATA
  const cartOptions = getCartProductOptions(price[currency.toLowerCase()], type);
  return (
      <SnipcartAdd
        id={id}
        name={name}
        slug={slug}
        prices={priceString}
        description={translatedDescription}
        options={cartOptions}
      >
          <AddButtonContainer id={id} />
      </SnipcartAdd>
  );
};

export default AddToCart;
