import React from 'react';
import { withTranslation } from 'react-i18next';

import Settings from '../../utils/Settings';

const LanguageSelector = ({switchLanguage, i18n}) => {
    //const langs = ['en', 'fr', 'nl'].filter(lang => lang !== i18n.language);
    const langs = {
        en: {label: "en", onClick: () => switchLanguage('en')},
        fr: {label: "fr", onClick: () => switchLanguage('fr')},
        nl: {label: "nl", onClick: () => switchLanguage('nl')},
    }
    const items = Object.keys(langs).filter(lang => lang !== i18n.language)
    return (
        <Settings
            label={i18n.language}
            items={items.map(item => langs[item])}
            icon={false}
            size="small"
        />
    );
};

export default withTranslation()(LanguageSelector);