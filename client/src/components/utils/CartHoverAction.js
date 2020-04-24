import React from 'react';
import styled from 'styled-components';

import { Box, Text, Button } from 'grommet';

export const CartAction = styled(Box)`
    position: absolute;
    opacity: 0;
    transform: translateY(20%);
    transition: transform 0.1s linear;
    bottom:0;
    width: 100%;
`

const CartHoverAction = () => {
    return (
        <>
            <CartAction background="black">
              <Text>Add</Text>
              <Text>Quantity</Text>
              <Button>Yes</Button>
            </CartAction>
        </>
    );
};

export default CartHoverAction;
