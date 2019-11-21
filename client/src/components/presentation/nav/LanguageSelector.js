import React from 'react';

import Settings from '../../utils/Settings';

const LanguageSelector = ({switchLanguage, displayLang}) => {
    const langs = {
        en: {label: "en", onClick: () => switchLanguage('en')},
        fr: {label: "fr", onClick: () => switchLanguage('fr')},
        nl: {label: "nl", onClick: () => switchLanguage('nl')},
    }
    const items = Object.keys(langs).filter(lang => lang !== displayLang)
    return (
        <Settings
            label={displayLang}
            items={items.map(item => langs[item])}
            icon={false}
            size="small"
        />
    );
};

export default LanguageSelector;