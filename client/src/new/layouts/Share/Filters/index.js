import React from 'react';

import { Box } from 'grommet';

const FiltersLayout = ({children}) => {
    return (
    <Box direction="row" justify="center" pad="small">
      {children}
    </Box>
    );
};

export default FiltersLayout;
