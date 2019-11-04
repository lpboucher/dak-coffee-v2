import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';
import common_nl from './translations/nl/common.json';
import products_en from './translations/en/products.json';
import products_fr from './translations/fr/products.json';
import products_nl from './translations/nl/products.json';

i18n.use(LanguageDetector).init({
    interpolation: { 
        escapeValue: false,
        format: function(value, format, lng) {
            if (format === 'bold') return value.bold();
            return value;
        }
    },
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "en",
    load: "languageOnly",
    resources: {
        en: {
            common: common_en,
            products: products_en
        },
        fr: {
            common: common_fr,
            products: products_fr
        },
        nl: {
            common: common_nl,
            products: products_nl
        },
    },
});

export default i18n;