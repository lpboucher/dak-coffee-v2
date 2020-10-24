import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchLanguage, getDisplayLang } from '../../../ducks/views';

import LanguageSelector from '../../presentation/nav/LanguageSelector';

class LanguageSelectorContainer extends Component {
   
    render() {
        return (
            <LanguageSelector switchLanguage={this.props.switchLanguage} {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        displayLang: getDisplayLang(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        switchLanguage: (lang) => dispatch(switchLanguage(lang)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelectorContainer);