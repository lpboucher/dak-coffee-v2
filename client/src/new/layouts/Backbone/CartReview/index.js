import React from 'react';
import styled from 'styled-components';

import { Layer } from 'grommet';

const CartReviewWrapper = styled(Layer)`
  min-height: inherit;
`

const CartReviewLayout = ({
  cartHasStatistics = true,
  isCartOpen,
  openCart,
  closeCart,
  cartList,
  statistics
}) => {
  return (
    <>
    {cartHasStatistics &&
      <CartReviewWrapper background="mainDark" full="horizontal" position="bottom" animation="slide" modal={false}>
        <div
          onMouseEnter={() => openCart()}
          onMouseLeave={() => closeCart()}
          aria-controls="example-collapse-text"
        >
          {isCartOpen ? cartList : null}
          {statistics}
        </div>
      </CartReviewWrapper>
    }
    </>
  )
}

export default CartReviewLayout;
