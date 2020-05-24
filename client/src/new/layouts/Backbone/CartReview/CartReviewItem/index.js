import React from 'react';

import { Image, Text, Box } from 'grommet';

const CartReviewItemLayout = ({image, name, quantity, price}) => {
    return (
        <Box direction="row" height={'80px'} align="center" justify="around">
            <Box width="50px" height="50px">
                <Image fit="contain" src={image} alt={name}/>
            </Box>
            <Box>
                <Text textAlign="center" size="small">{name}</Text>
            </Box>
            <Box>
                <Text textAlign="center" size="small">{`${quantity} x`}</Text>
            </Box>
            <Box>
                <Text textAlign="center" size="small">{price}</Text>
            </Box>
        </Box>
    );
};

export default CartReviewItemLayout;
