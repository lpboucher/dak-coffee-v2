import React from 'react';

import { Image, Text, Box } from 'grommet';

const CartReviewItemLayout = ({image, name, quantity, price, total}) => {
    return (
        <Box direction="row" height={'80px'} align="center" justify="around">
            <Box width="20%" height="50px">
                <Image fit="contain" src={image} alt={name}/>
            </Box>
            <Box width="20%">
                <Text textAlign="center" size="small">{name}</Text>
            </Box>
            <Box width="20%">
                <Text textAlign="center" size="small">{`${quantity} x`}</Text>
            </Box>
            <Box width="20%">
                <Text textAlign="center" size="small">{price}</Text>
            </Box>
            <Box width="20%">
                <Text textAlign="center" size="small">{total}</Text>
            </Box>
        </Box>
    );
};

export default CartReviewItemLayout;
