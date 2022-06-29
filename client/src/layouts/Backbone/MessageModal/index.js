import React from 'react';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box, Layer } from 'grommet';

const MessageModalLayout = ({isOpen, close, modalMessage}) => {
  const { greaterThan } = useResponsive();
  return (
    <>
      {greaterThan.medium &&
        <>
          {isOpen &&
              <Layer onEsc={() => close()} onClickOutside={() => close()} modal position="center">
                  <Box pad="large" background="mainDark" wrap justify="center">
                      <Box justify="evenly" align="center">
                          {modalMessage}
                      </Box>
                  </Box>
              </Layer>
          }
        </>
      }
    </>
  )
}

export default MessageModalLayout;
