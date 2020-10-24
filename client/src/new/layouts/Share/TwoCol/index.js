import React from 'react';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box } from 'grommet';

import { layout } from '../../../../layout';

const {
  twoColLayoutWidth,
} = layout;

const TwoColLayout = ({children}) => {
  const { mediaType } = useResponsive();
  return (
    <Box direction="row" wrap>
      {children.map((oneChild) =>
        <Box width={layout[`twoColLayoutWidth_${mediaType}`] || twoColLayoutWidth} pad="large">
          {oneChild}
        </Box>
      )}
    </Box>
  );
};

export default TwoColLayout;
