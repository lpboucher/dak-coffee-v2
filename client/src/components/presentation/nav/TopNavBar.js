import React from 'react';

import FullWidthEvenRowLayout from '../../layouts/FullWidthEvenRowLayout';
import AccountContainer from '../../containers/nav/AccountContainer';
import CartMenuContainer from '../../containers/nav/CartMenuContainer';
import LanguageSelector from '../../presentation/nav/LanguageSelector';
import CurrencySelectorContainer  from '../../containers/nav/CurrencySelectorContainer';
/*import MobileMenu from '../../presentational/Navbar/MobileMenu';*/

const TopNavBar = ({loc}) => {
    return (
    <FullWidthEvenRowLayout loc={loc}>
        <AccountContainer />
        <CartMenuContainer />
        <LanguageSelector />
        <CurrencySelectorContainer />
        {/*<Account loggedIn={isUserLoggedIn} logout={logout}/>
        <CartCounter 
            items={cartItems}
            quantity={quantity}
            isOpen={isOpen}
            open={openCart}
            close={closeCart}
            cartRef={cartRef}
            currency={displayCurrency}/>
        <CurrencySelector updateCurrency={switchCurrency} displayCurrency={displayCurrency}/>
        {!isMobile &&
        <LanguageSelector />
        }
        {isMobile &&
        <Menu onClick={!isMobileOpen ? openMenu : closeMenu}/>
        }
        {isMobileOpen &&
            <MobileMenu close={closeMenu}/>
        }
    </Box>*/}
    </FullWidthEvenRowLayout>
    );
};

export default TopNavBar;
