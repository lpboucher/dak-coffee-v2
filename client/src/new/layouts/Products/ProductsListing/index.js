import React from 'react';

import { Box } from 'grommet';

import {layout} from '../../../../layout';

const ProductsListingLayout = ({children, moreButton, showMore}) => {
    return (
    <Box
      direction="row"
      justify="around"
      background="mainWhite"
      pad={{vertical: layout.sectionPadding}}
      wrap
      >
        {children}
        {showMore &&
        <Box margin={{horizontal: 'auto'}}>
          {moreButton}
        </Box>
        }
    </Box>
    );
};

export default ProductsListingLayout;
