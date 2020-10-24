import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDisplayCurrency, switchDisplayCurrency } from '../../../ducks/views';

import CurrencySelector from '../../presentation/nav/CurrencySelector';

class CurrencySelectorContainer extends Component {
   
    render() {
        return (
            <CurrencySelector {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        displayCurrency: getDisplayCurrency(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        switchCurrency: (curr) => dispatch(switchDisplayCurrency(curr)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelectorContainer);