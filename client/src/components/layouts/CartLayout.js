import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box } from 'grommet';

import { cartLayout } from './globalResponsiveLayout';

const Cart = ({children, media}) => {
    const layout = cartLayout(media);
    return (
        <Box pad={layout.pad}>
            {children.map(item => item)}
        </Box>
    );
};

export default withResponsive(Cart);