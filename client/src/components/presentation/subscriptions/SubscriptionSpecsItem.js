import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Heading, Text } from 'grommet';

const SubscriptionSpecsItem = ({icon, header, desc, t}) => {
    return (
        <Box align="center">
            {icon}
            <Heading textAlign="center" level={1} size="small" margin={{top: "small"}}>{t(header)}</Heading>
            <Text textAlign="center" margin="small" size="small" style={{textTransform: 'uppercase'}}>{t(desc)}</Text>
        </Box>
    );
};

export default withTranslation()(SubscriptionSpecsItem);