import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isAdding, isCartLoaded, openCartSummary, closeCartSummary } from '../../../../../../ducks/views';
import { getCartQuantity } from '../../../../../../ducks/cart';

import Cart from '../../../../../components/Backbone/Header/SettingMenu/Cart';

import ClipLoader from 'react-spinners/ClipLoader';

const CartContainer = () => {
  const cartQuantity = useSelector(state => getCartQuantity(state));
  const isLoaded = useSelector(state => isCartLoaded(state));
  const { adding } = useSelector(state => isAdding(state));
  const dispatch = useDispatch();
  const openCart = () => dispatch(openCartSummary());
  const closeCart = () => dispatch(closeCartSummary());
  return (
    <>
        {!adding && isLoaded ?
            <Cart open={openCart} close={closeCart} quantity={cartQuantity}/>
            :
            <ClipLoader size={20} color='black'/>
        }
    </>
  );
};

export default CartContainer;

