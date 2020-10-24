import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/global/useModal';

import AnnouncementModalLayout from '../../../layouts/Backbone/AnnouncementModal';

import Newsletter from '../../../components/Newsletter';

const modalContent = <Newsletter type="modal"/>

const AnnouncementModal = () => {
  const { t } = useTranslation();
  const { open, close, isOpen } = useModal();
  return (
    <AnnouncementModalLayout
      isOpen={isOpen}
      open={open}
      close={close}
      modalAnnounce={t("promotions.newsletter", {discount: '10%'} )}
      modalContent={modalContent}
      flagText={t("promotions.get-%-off", {discount: '10%'} )}
    />
  )
}

export default AnnouncementModal;

