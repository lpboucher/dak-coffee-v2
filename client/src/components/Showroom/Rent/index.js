import React from 'react';
import { useTranslation } from 'react-i18next';

import TextBoxLayout from "../../../layouts/Share/TextBox"

const Rent = () => {
  const { t } = useTranslation();
  return (
        <TextBoxLayout hasSecondaryBackground={true}>
          {t('showroom.rent')}
        </TextBoxLayout>
  );
};

export default Rent;
