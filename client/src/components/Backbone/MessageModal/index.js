import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMessage } from '../../../hooks/global/useMessage';

import { Heading } from 'grommet';

import MessageModalLayout from '../../../layouts/Backbone/MessageModal';

const modalMessageHeading = (t) => (
  <>
    <Heading size="small" margin={{bottom: "medium"}}>{t("announcement")}</Heading>
  </>
)

const MessageModal = () => {
  const { t } = useTranslation();
  const { open, close, isOpen } = useMessage();
  return (
    <MessageModalLayout
      isOpen={isOpen}
      open={open}
      close={close}
      modalMessage={modalMessageHeading(t)}
    />
  )
}

export default MessageModal;

