import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItemToAdd } from '../../../../ducks/cart';
import { getDisplayCurrency } from '../../../../ducks/views';

import AddToCart from '../../../components/Cart/AddToCart';

const AddToCartContainer = ({productId}) => {
  const itemToAdd = useSelector(state => getCartItemToAdd(state, productId));
  const currency = useSelector(state => getDisplayCurrency(state));

  return (
    <AddToCart currency={currency} {...itemToAdd} />
  );
}

export default AddToCartContainer;

