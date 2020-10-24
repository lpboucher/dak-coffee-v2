import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box, Layer, Text } from 'grommet';

const ModalFlag = styled(Layer)`
  width: 0;
  height: 0;
  border-bottom: 100px solid ${({theme}) => theme.global.colors.primary};
  letter-spacing: 1px;
  font-weight: 600;
  border-right: 100px solid transparent;
  background: transparent;
  border-radius: 0px;
  z-index: 20;
`

const ModalText = styled(Text)`
  position:absolute;
  top: 55px;
  width: 100px;
  left: -15px;
  text-align: center;
  transform: rotate(45deg);
  display:block;
`

const AnnouncementModalLayout = ({isOpen, open, close, modalAnnounce, modalContent, flagText}) => {
  const { greaterThan } = useResponsive();
  return (
    <>
      {greaterThan.medium &&
        <>
          {isOpen ?
              <Layer onEsc={() => close()} onClickOutside={() => close()} modal position="center">
                  <Box background="mainDark" width='600px' height="400px" wrap justify="center">
                      <Box height="150px" justify="center" align="center">
                          {modalAnnounce}
                      </Box>
                      <Box height="250px">
                          {modalContent}
                      </Box>
                  </Box>
              </Layer>
              :
            <ModalFlag responsive={false} onClick={() => open()} background="none" position="bottom-left" modal={false}>
              <ModalText size="small" color="white">{flagText}</ModalText>
            </ModalFlag>
          }
        </>
      }
    </>
  )
}

export default AnnouncementModalLayout;
