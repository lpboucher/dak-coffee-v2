import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import FullWidthEvenRowLayout from '../../layouts/FullWidthEvenRowLayout';
import AccountContainer from '../../containers/nav/AccountContainer';
import CartMenuContainer from '../../containers/nav/CartMenuContainer';
import LanguageSelectorContainer from '../../containers/nav/LanguageSelectorContainer';
import CurrencySelectorContainer  from '../../containers/nav/CurrencySelectorContainer';
import MobileMenuContainer from '../../containers/nav/MobileMenuContainer';

const TopNavBar = ({loc, media}) => {
    const isMobile = media === "small" || media === "medium" || media === "extraSmall";
    return (
    <FullWidthEvenRowLayout loc={loc}>
        <AccountContainer />
        <CartMenuContainer />
        <CurrencySelectorContainer />
        {!isMobile &&
        <LanguageSelectorContainer />
        }
        {isMobile &&
        <MobileMenuContainer />
        }
    </FullWidthEvenRowLayout>
    );
};

export default withResponsive(TopNavBar);
