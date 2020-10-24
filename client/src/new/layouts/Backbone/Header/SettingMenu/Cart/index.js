import React from 'react';
import styled from 'styled-components';

import { Stack, Box, Text } from 'grommet';

import { ReactComponent as Cart} from '../../../../../../assets/icons/shoppingcart.svg';

const CartWrapper = styled.div`
  width: 40px;
  line-height: 20px;
  margin: 0 20px;
  cursor: pointer;
`

const CartIcon = styled(Cart)`
    width: 30px;
    height: 30px;
    fill: black;
`

const CartLayout = ({quantity, showItems, open, close}) => {
    return (
        <CartWrapper
            onMouseEnter={() => open()}
            onMouseLeave={() => close()}
            aria-controls="example-collapse-text"
            className="snipcart-checkout"
        >
          {showItems ?
            <Stack anchor="right" fill>
                <CartIcon />
                <Box
                    background="primary"
                    pad={{ horizontal: 'xsmall' }}
                    round
                >
                  <Text color="mainWhite" size="xsmall" weight="bold">
                    {quantity}
                  </Text>
                </Box>
            </Stack>
            :
            <CartIcon />
          }
        </CartWrapper>
    );
};

export default CartLayout;
