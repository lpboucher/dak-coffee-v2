import React from 'react';

import AnnouncementModalLayout from '../../../layouts/Backbone/AnnouncementModal';

import Newsletter from '../../../containers/Newsletter';

const modalContent = <Newsletter />

const AnnouncementModal = ({open, close, isOpen}) => {
  return (
    <AnnouncementModalLayout
      isOpen={isOpen}
      open={open}
      close={close}
      modalAnnounce={"Register for our newsletter and get 15% off your first order"}
      modalContent={modalContent}
      flagText="Get 15% Off"
    />
  )
}

export default AnnouncementModal;

