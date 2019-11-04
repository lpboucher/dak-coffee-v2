import React from 'react';

import { Box } from 'grommet';

const FullImg = ({ imgLink, size, withMinHeight=true, ...rest }) => {
    const bgSize = { 
        backgroundSize: size,
        minHeight: withMinHeight ? '400px' : ''
    }
    return (
        <Box width="100%" height="100%" background={`url(${imgLink})`} style={bgSize} {...rest}/>
    );
};

export default FullImg;