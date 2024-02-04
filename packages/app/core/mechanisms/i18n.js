import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from 'app/locales/en/common.json';

i18next
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        interpolation: {escapeValue: false}, // React already does escaping
        fallbackLng: 'en',
        defaultNS: 'common',
        debug: false,
        react: {
            // wait: true,
            useSuspense: false,
        },
        initImmediate: false,
        resources: {
            en: {
                common: commonEn,
            },
        },
    });

export default i18next;
