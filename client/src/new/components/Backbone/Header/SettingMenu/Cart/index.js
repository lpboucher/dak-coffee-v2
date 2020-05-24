import React from 'react';

import CartLayout from '../../../../../layouts/Backbone/Header/SettingMenu/Cart';

const Cart = ({open, close, quantity}) => {
  return (
    <CartLayout
      quantity={quantity}
      showItems={quantity > 0}
      open={open}
      close={close}
    />
  );
}

export default Cart;
