import React from 'react';

import { Box } from 'grommet';

import {layout} from '../../../../layout';

const ProductsListingLayout = ({children}) => {
    return (
    <Box
      direction="row"
      justify="between"
      background="mainWhite"
      pad={{vertical: layout.sectionPadding}}
      wrap
      >
        {children}
    </Box>
    );
};

export default ProductsListingLayout;
