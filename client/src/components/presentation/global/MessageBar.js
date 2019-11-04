import React from 'react';
import { withTranslation } from 'react-i18next';

import {Box, Text} from 'grommet';

const MessageBar = ({loc, text, t}) => {
    return (
        <Box fill gridArea={loc} background="mainDark">
            <Text alignSelf="center">{t(text)}</Text>
        </Box>
    );
};

export default withTranslation()(MessageBar);