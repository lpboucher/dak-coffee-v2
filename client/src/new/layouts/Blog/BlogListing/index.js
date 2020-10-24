import React from 'react';

import { Box } from 'grommet';

import {layout} from '../../../../layout';

const BlogListingLayout = ({children}) => {
    return (
    <Box
      background="mainWhite"
      pad={{vertical: layout.sectionPadding}}
      >
        <Box
          direction="row"
          wrap
        >
          {children}
        </Box>
    </Box>
    );
};

export default BlogListingLayout;
