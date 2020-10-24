import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translateEN from './translations/en.json';
import translateFR from './translations/fr.json';
import translateNL from './translations/nl.json';

i18n.use(LanguageDetector).init({
    interpolation: {
        escapeValue: false,
        format: function(value, format, lng) {
            if (format === 'bold') return value.bold();
            return value;
        }
    },
    fallbackLng: "en",
    load: "languageOnly",
    resources: {
        en: {
          translation: translateEN
        },
        fr: {
          translation: translateFR
        },
        nl: {
          translation: translateNL
        }
    },
});

export default i18n;
