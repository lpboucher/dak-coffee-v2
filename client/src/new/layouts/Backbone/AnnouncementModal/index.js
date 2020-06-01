import React from 'react';
import styled from 'styled-components';

import { Box, Layer } from 'grommet';

const ModalFlag = styled(Layer)`
  width: 0;
  height: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
  background: transparent;
  border-radius: 0px;
  z-index: 20;
`

const ModalText = styled.span`
  position:absolute;
  top: 50px;
  width: 100px;
  left: -15px;
  text-align: center;
  transform: rotate(45deg);
  display:block;
`

const AnnouncementModalLayout = ({isOpen=true, open, close, modalAnnounce, modalContent, flagText}) => {
  return (
    <>
      {isOpen ?
          <Layer onEsc={() => close()} onClickOutside={() => close()} modal position="center">
              <Box background="mainDark" width='600px' height="400px" direction='row' wrap justify="center">
                  <Box height="150px" justify="center" align="center">
                      {modalAnnounce}
                  </Box>
                  <Box height="250px">
                      {modalContent}
                  </Box>
              </Box>
          </Layer>
          :
        <ModalFlag onClick={() => open()} background="none" position="bottom-left" modal={false}>
          <ModalText>{flagText}</ModalText>
        </ModalFlag>
      }
    </>
  )
}

export default AnnouncementModalLayout;
