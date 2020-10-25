import React from 'react';
import { useTranslation } from 'react-i18next';
import { useModal } from '../../../hooks/global/useModal';

import { Heading, Text } from 'grommet';

import AnnouncementModalLayout from '../../../layouts/Backbone/AnnouncementModal';

import Newsletter from '../../../components/Newsletter';

const modalContent = <Newsletter type="modal"/>

const modalHeading = (t) => (
  <>
    <Heading margin={{bottom: "medium"}}>{t("promotions.get-%-off", {discount: '10%'})}</Heading>
    <Text>{t("promotions.newsletter", {discount: '10%'})}</Text>
  </>
)

const AnnouncementModal = () => {
  const { t } = useTranslation();
  const { open, close, isOpen } = useModal();
  return (
    <AnnouncementModalLayout
      isOpen={isOpen}
      open={open}
      close={close}
      modalAnnounce={modalHeading(t)}
      modalContent={modalContent}
      flagText={t("promotions.get-%-off", {discount: '10%'} )}
    />
  )
}

export default AnnouncementModal;

