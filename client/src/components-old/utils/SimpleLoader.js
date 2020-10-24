import React from 'react';

import { Box } from 'grommet';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({pad="large", align="center", size=70}) => {
    return (
        <Box pad={pad} align={align}>
            <ClipLoader size={size} color='#A96C35'/>
        </Box>
    );
};

export default Loader;