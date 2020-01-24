import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMobileOpen, openMobileMenu, closeMobileMenu } from '../../../ducks/views';

import MobileMenu from '../../presentation/nav/MobileMenu';

import Burger from '../../utils/Burger';

class MobileMenuContainer extends Component {
   
    render() {
        const { isMobileOpen, openMenu, closeMenu } = this.props;
        return (
            <>
                <Burger open={isMobileOpen} setOpen={openMenu} setClose={closeMenu} />
                {isMobileOpen &&
                    <MobileMenu close={closeMenu}/>
                }
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        isMobileOpen: isMobileOpen(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openMenu: () => dispatch(openMobileMenu()),
        closeMenu: () => dispatch(closeMobileMenu()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuContainer);