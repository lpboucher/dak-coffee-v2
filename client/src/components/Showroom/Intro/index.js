import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Text } from 'grommet';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <Box background="secondaryGrey" pad={{vertical: "7%", horizontal: "20%"}}>
          {t('showroom.intro').split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
    </Box>
  );
};

export default Intro;
