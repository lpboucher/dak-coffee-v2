import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'grommet';

import TextBoxLayout from "../../../layouts/Share/TextBox";

const Intro = () => {
  const { t } = useTranslation();
  return (
        <TextBoxLayout>
          {t('showroom.intro').split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </TextBoxLayout>
  );
};

export default Intro;
