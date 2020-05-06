import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box } from 'grommet';

import { TwoCol } from './globalResponsiveLayout';

const TwoColLayout = ({bgColor, left, right, pad={outer: "large", inner:"large"}, noPad=false, media}) => {
    const layout = TwoCol(media, pad)
    return (
            <Box direction='row' pad={layout.pad.outer} background={bgColor} wrap>
                <Box pad={!noPad ? layout.pad.inner : 'none'} width={layout.width}>
                    {left}
                </Box>
                <Box pad={!noPad ? layout.pad.inner : 'none'} width={layout.width}>
                    {right}
                </Box>
            </Box>
    );
};

export default withResponsive(TwoColLayout);
