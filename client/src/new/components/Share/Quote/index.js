import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';

const Quote = ({quote}) => {
  const { t } = useTranslation();
  return (
    <Box pad="medium">
      <Paragraph size="medium" alignSelf="center">
          {t(quote)}
      </Paragraph>
    </Box>
  )
}

export default Quote;

