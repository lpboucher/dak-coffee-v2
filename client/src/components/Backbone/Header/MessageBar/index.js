import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from '../../../../hooks/utils/useLocation';

import { Text } from 'grommet';

const MessageBar = () => {
  const { t } = useTranslation();
  const { location, shippingThreshold } = useLocation();
  return (
        <Text size="small">
          {t('header-message', {region: location, threshold: shippingThreshold } )}
        </Text>
  );
};

export default MessageBar;
