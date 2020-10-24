import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Layer } from 'grommet';

const CartReviewWrapper = styled(Layer)`
  min-height: inherit;
  padding-bottom: 36px;
  z-index: 10;
`

const CartStatsWrapper = styled(Layer)`
  min-height: inherit;
  height: 36px;
  z-index: 15;
`

const CartSummary = styled.div`
  cursor: pointer;
  height: 100%;
`

const CartReviewLayout = ({
  cartHasStatistics,
  isCartOpen,
  openCart,
  closeCart,
  cartList,
  statistics
}) => {
  const { greaterThan } = useResponsive();
  return (
    <>
      {cartHasStatistics && isCartOpen &&
        <CartReviewWrapper responsive={false} full="horizontal" animation="slide" position="bottom" modal={false}>
          <div
            onMouseEnter={() => openCart()}
            onMouseLeave={() => closeCart()}
            aria-controls="example-collapse-text"
          >
            {cartList}
          </div>
        </CartReviewWrapper>
      }
      {cartHasStatistics &&
        <CartStatsWrapper responsive={false} background="mainDark" animation="slide" full="horizontal" position="bottom" modal={false}>
          <CartSummary
            onMouseEnter={() => openCart()}
            onMouseLeave={() => closeCart()}
            aria-controls="example-collapse-text"
            className={`${greaterThan.large ? "snipcart-checkout" : ""}`}
          >
            {statistics}
          </CartSummary>
        </CartStatsWrapper>
      }
    </>
  )
}

export default CartReviewLayout;
