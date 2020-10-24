import React from 'react';

import { ThemeContext, Box, Carousel } from 'grommet';

import { layout } from '../../../layout';

const pointerEvents = {
  box: {
    extend: 'pointer-events: none;'
  },
  button: {
    extend: 'pointer-events: auto; text-transform: uppercase;'
  }
}

const SliderLayout = ({children, ...settings}) => {
    const slideSettings = {
      controls: "selectors",
      play: 8000,
      ...settings
  };
  const boxHeight = `calc(85vh - ${layout.topOffset})`;
    return (
      <ThemeContext.Extend value={pointerEvents}>
        <Box height={boxHeight}>
          <Carousel fill {...slideSettings}>
            {children}
          </Carousel>
        </Box>
    </ThemeContext.Extend>
    );
};

export default SliderLayout;
