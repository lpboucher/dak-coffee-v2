import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box } from 'grommet';

import { twoCardLayout } from './globalResponsiveLayout';

const TwoCardLayout = ({children, media}) => {
    const layout = twoCardLayout(media)
    return (
        <Box direction="row" pad="large" wrap>
            {children.map(item => 
                <Box key={item.key} width={layout.width} margin={layout.margin} background="lightGrey">
                    {item}
                </Box>
            )}
        </Box>
    );
};

export default withResponsive(TwoCardLayout);