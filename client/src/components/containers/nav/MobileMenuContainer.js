import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMobileOpen, openMobileMenu, closeMobileMenu } from '../../../ducks/views';

import MobileMenu from '../../presentation/nav/MobileMenu';

import { Menu } from 'grommet-icons';

class MobileMenuContainer extends Component {
   
    render() {
        const { isMobileOpen, openMenu, closeMenu } = this.props;
        return (
            <>
                <Menu onClick={!isMobileOpen ? openMenu : closeMenu}/>
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