import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isSnipOpen, openSnipcart, closeSnipcart } from '../../../ducks/views';

import SubNavBar from '../../presentation/nav/SubNavBar';

class SubNavContainer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isSnipOpen !== this.props.isSnipOpen;
    }

    componentDidMount() {
        window.Snipcart.subscribe('cart.opened', () => this.props.openSnip());
        window.Snipcart.subscribe('cart.closed', () => this.props.closeSnip());
        this.unlisten = this.props.history.listen((location, action) => {
            if (action === "PUSH" && this.props.isSnipOpen) {
                window.Snipcart.api.modal.close();
            }
      })
    }
      
    componentWillUnmount() {
        this.unlisten();
    }
   
    render() {
        return (
            <SubNavBar {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        isSnipOpen: isSnipOpen(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openSnip: () => dispatch(openSnipcart()),
        closeSnip: () => dispatch(closeSnipcart()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SubNavContainer));