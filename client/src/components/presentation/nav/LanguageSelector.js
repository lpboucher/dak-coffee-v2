import React from 'react';
import { withTranslation } from 'react-i18next';

import Settings from '../../utils/Settings';

const LanguageSelector = ({i18n}) => {
    const langs = ['en', 'fr', 'nl'].filter(lang => lang !== i18n.language);
    return (
        <Settings
            label={i18n.language}
            items={langs.map(lang => ({ label: lang, onClick: () => i18n.changeLanguage(lang) }))}
            icon={false}
            size="small"
        />
    );
};

export default withTranslation()(LanguageSelector);