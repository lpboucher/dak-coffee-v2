import React from 'react';
import { Box, Carousel } from 'grommet';

import { layout } from '../../../layout';

const SliderLayout = ({children, ...settings}) => {
    const slideSettings = {
      controls: "selectors",
      play: 8000,
      ...settings
  };
  const boxHeight = `calc(85vh - ${layout.topOffset})`;
    return (
      <Box height={boxHeight}>
        <Carousel fill {...slideSettings}>
          {children}
        </Carousel>
      </Box>
    );
};

export default SliderLayout;
