import React from 'react';
import { useModal } from '../../../hooks/global/useModal';

import AnnouncementModalLayout from '../../../layouts/Backbone/AnnouncementModal';

import Newsletter from '../../../components/Newsletter';

const modalContent = <Newsletter />

const AnnouncementModal = () => {
  const { open, close, isOpen } = useModal();
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

