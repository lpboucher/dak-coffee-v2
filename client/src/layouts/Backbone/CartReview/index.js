import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Layer } from 'grommet';

const CartStatsWrapper = styled(Layer)`
  min-height: inherit;
  height: 36px;
  z-index: 15;
`

const CartSummary = styled.div`
  cursor: pointer;
  height: 100%;
`

const CartReviewLayout = ({ cartHasStatistics, openCart, statistics }) => {
  const { greaterThan } = useResponsive();
  return (
    <>
      {cartHasStatistics &&
        <CartStatsWrapper responsive={false} background="mainDark" animation="slide" full="horizontal" position="bottom" modal={false}>
          <CartSummary
            onMouseEnter={() => openCart()}
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
