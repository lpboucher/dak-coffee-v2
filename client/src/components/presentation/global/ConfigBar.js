import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import {Box} from 'grommet';

import AccountContainer from '../../containers/nav/AccountContainer';
import CartMenuContainer from '../../containers/nav/CartMenuContainer';
import CurrencySelectorContainer from '../../containers/nav/CurrencySelectorContainer';
import LanguageSelectorContainer from '../../containers/nav/LanguageSelectorContainer';
import MobileMenuContainer from '../../containers/nav/MobileMenuContainer';

const ConfigBar = ({media}) => {
    const isMobile = media === "small" || media === "medium" || media === "extraSmall";
    return (
        <Box direction="row" justify="end" align="center" fill background="darkGrey">
            {isMobile &&
                <>
                    <AccountContainer />
                    <CartMenuContainer />
                </>
            }
            <CurrencySelectorContainer />
            <LanguageSelectorContainer />
            {isMobile &&
                <MobileMenuContainer />
            }
        </Box>
    );
};

export default withResponsive(ConfigBar);