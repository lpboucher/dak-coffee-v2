import React from 'react';

import { Box } from 'grommet';

const FullWidthEvenRowLayout = ({loc=null, children, ...rest}) => {
    return (
    <Box direction="row" gridArea={loc} fill="horizontal" align="center" justify="evenly" {...rest}>
        {children.map(item => item)}
    </Box>
    );
};

export default FullWidthEvenRowLayout;
