import React from 'react';

import { Box, Text } from 'grommet';

const IconedExplanation = ({icon, description, background, size, spacing, vertical, margin=spacing}) => {
    return (
        <Box background={background} pad={spacing} margin={margin} direction="row" align={vertical}>
            {icon}
            <Text size={size} margin={{left: 'small'}}>{description}</Text>
        </Box>
    );
};

export default IconedExplanation;