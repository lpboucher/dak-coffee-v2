import React from 'react';
import { useCart } from '../../../../../hooks/cart/useCart';

import CartLayout from '../../../../../layouts/Backbone/Header/SettingMenu/Cart';

import ClipLoader from 'react-spinners/ClipLoader';

const Cart = () => {
  const { adding, isLoaded, open, quantity } = useCart();
  return (
    <>
      {!adding && isLoaded ?
        <CartLayout
        quantity={quantity}
        showItems={quantity > 0}
        open={open}
      />
    :
      <ClipLoader size={20} color='black'/>
    }
    </>
  );
}

export default Cart;
