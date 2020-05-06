import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import {Box} from 'grommet';

import MessageContainer from '../../containers/nav/MessageContainer';
import AccountContainer from '../../containers/nav/AccountContainer';
import CartMenuContainer from '../../containers/nav/CartMenuContainer';
import CurrencySelectorContainer from '../../containers/nav/CurrencySelectorContainer';
import LanguageSelectorContainer from '../../containers/nav/LanguageSelectorContainer';
import MobileMenuContainer from '../../containers/nav/MobileMenuContainer';

const ConfigBar = ({media}) => {
    const isMobile = media === "small" || media === "medium" || media === "extraSmall";
    return (
      <>
      {isMobile &&
      <Box background="lightGrey">
        <MessageContainer size="xsmall"/>
      </Box>
      }
        <Box direction="row" justify="end" align="center" fill background="mainDark">
            {!isMobile &&
              <MessageContainer />
            }
            <AccountContainer />
            <CartMenuContainer />
            <CurrencySelectorContainer />
            <LanguageSelectorContainer />
            {isMobile &&
                <MobileMenuContainer />
            }
        </Box>
      </>
    );
};

export default withResponsive(ConfigBar);
