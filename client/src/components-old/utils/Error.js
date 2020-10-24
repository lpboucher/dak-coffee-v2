import React from 'react';

import { Box } from 'grommet';
import { Close } from 'grommet-icons';

const Error = ({pad="large", align="center", size='large'}) => {
    return (
        <Box pad={pad} align={align}>
            <Close size={size} color='#A96C35'/>
        </Box>
    );
};

export default Error;