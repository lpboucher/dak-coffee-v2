import React from 'react';

import {Box} from 'grommet';

import AccountContainer from '../../containers/nav/AccountContainer';
import CurrencySelectorContainer from '../../containers/nav/CurrencySelectorContainer';
import LanguageSelectorContainer from '../../containers/nav/LanguageSelectorContainer';

const ConfigBar = () => {
    return (
        <Box direction="row" justify="end" fill background="darkGrey">
            <AccountContainer />
            <CurrencySelectorContainer />
            <LanguageSelectorContainer />
        </Box>
    );
};

export default ConfigBar;