import React from 'react';
import { useTranslation } from 'react-i18next';

import TextBoxLayout from "../../../layouts/Share/TextBox"

const Intro = () => {
  const { t } = useTranslation();
  return (
        <TextBoxLayout>
          {t('showroom.intro')}
        </TextBoxLayout>
  );
};

export default Intro;
