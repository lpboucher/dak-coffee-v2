import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box } from 'grommet';

import { cartItemLayout } from './globalResponsiveLayout';

const CartItem = ({
    children,
    media}) => {
    const layout = cartItemLayout(media);
    const isNotSmall = (media === "medium" || media === "large" || media === "infinity");
    return (
        <>
            <Box direction="row" align="center" width="100%" height={layout.height}>
                <Box width={layout.width[0]} align="center">{children[0]}</Box>
                <Box width={layout.width[1]} height="100%">{children[1]}</Box>
                <Box width={layout.width[2]}>{children[2]}</Box>
                {isNotSmall &&
                    <Box width={layout.width[3]} align="center">{children[3]}</Box>
                }
                <Box width={layout.width[4]} align="center">{children[4]}</Box>
                <Box width={layout.width[4]} align="center">{children[5]}</Box>
            </Box>
            <hr/>
        </>
    );
};

export default withResponsive(CartItem);