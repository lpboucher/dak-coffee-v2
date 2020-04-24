import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Box } from 'grommet';
import CardHover from '../../utils/new/CardHover';
//maybe remove from here

const WithHover = styled(Box)`
    cursor: ${({isHoverable}) => isHoverable ? 'pointer' : 'initial'};
    padding: 0 12px;
    &:hover ${CardHover}:before {
    border-bottom: 1px solid #a96c35;
    }
`

const ProductCardLayout = ({feature, info, linkTarget, isClickable}) => {
    const history = useHistory();
    //const layout = coffeeCardLayout(media);
    return (
        <WithHover height="300px" width="100%" isHoverable={isClickable}>
            <Box height="75%" width="100%" onClick={() => isClickable ? history.push(linkTarget) : null}>
                {feature}
            </Box>
            <Box width="100%">
                {info}
            </Box>
        </WithHover>
    );
}

export default ProductCardLayout;


