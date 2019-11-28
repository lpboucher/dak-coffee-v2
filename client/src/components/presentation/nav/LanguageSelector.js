import React from 'react';

import NavItemWithDrop from '../nav/SubNavItemWithDrop';
import DropItem from '../../utils/DropItem';

const LanguageSelector = ({switchLanguage, displayLang}) => {
    const langs = {
        en: {label: "en", onClick: () => switchLanguage('en')},
        fr: {label: "fr", onClick: () => switchLanguage('fr')},
        nl: {label: "nl", onClick: () => switchLanguage('nl')},
    }
    const items = Object.keys(langs).filter(lang => lang !== displayLang)
    return (
        <NavItemWithDrop label={displayLang}>
            {items.map(item => 
                <DropItem key={langs[item].label} to="#" onClick={langs[item].onClick}>{langs[item].label}</DropItem>
            )}
        </NavItemWithDrop>
    );
};

export default LanguageSelector;