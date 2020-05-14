import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isCheckingLoginStatus } from '../../../ducks/views';
import { getLoggedInStatus, login, logout } from '../../../ducks/user';

import Account from '../../presentation/nav/Account';

import Loader from '../../utils/SimpleLoader';

class AccountContainer extends Component {

    componentDidMount() {
      if( navigator.userAgent !== 'ReactSnap') {
        window.Snipcart.subscribe('authentication.success', (email) => {
          this.props.login()
        });
      }
    }

    componentWillUnmount() {
      if( navigator.userAgent !== 'ReactSnap') {
        window.Snipcart.unsubscribe('authentication.success');
      }
    }

    render() {
        const { isLoggedIn, isChecking } = this.props;
        return (
            <>
                {!isChecking ?
                    <Account isLoggedIn={isLoggedIn} logout={this.props.logout}/>
                    :
                    <Loader pad={"small"} size={25}/>
                }
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: getLoggedInStatus(state),
        isChecking: isCheckingLoginStatus(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(login()),
        logout: () => dispatch(logout()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
