import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { spacedRowLayout } from './globalResponsiveLayout';

import { Box } from 'grommet';

const SpacedRowLayout = ({children, media}) => {
    const layout = spacedRowLayout(media);
    return (
        <Box direction="row" pad="large" background="darkGrey" wrap>
            {children.map(item => 
                <Box key={item.key} width={layout.width} pad={{horizontal: "xlarge"}}>
                    {item}
                </Box>
            )}
        </Box>
    );
};

export default withResponsive(SpacedRowLayout);