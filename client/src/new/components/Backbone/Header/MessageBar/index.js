import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'grommet';

const MessageBar = () => {
  const { t } = useTranslation();
  return (
        <Text>
          This is the message bar
        </Text>
  );
};

export default MessageBar;
