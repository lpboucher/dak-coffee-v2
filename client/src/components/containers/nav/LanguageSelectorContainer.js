import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchLanguage } from '../../../ducks/views';

import LanguageSelector from '../../presentation/nav/LanguageSelector';

class LanguageSelectorContainer extends Component {
   
    render() {
        return (
            <LanguageSelector switchLanguage={this.props.switchLanguage} {...this.props}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchLanguage: (lang) => dispatch(switchLanguage(lang)),
    };
}

export default connect(null, mapDispatchToProps)(LanguageSelectorContainer);