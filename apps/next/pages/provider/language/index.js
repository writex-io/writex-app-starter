import React from 'react';
import Cookies from 'universal-cookie';
import i18next from 'i18next';
import dayjs from 'app/core/mechanisms/dayjs';

import { COOKIE_LANGUAGE } from 'app/core/constants/cookies';
import { LANGUAGE_EN } from 'app/core/constants/languages';

import initI18next from 'app/core/mechanisms/i18n';

// TODO: add dynamic import instead of static one
import('dayjs/locale/de');
import('dayjs/locale/uk');
import('dayjs/locale/ru');

// const { APP_DOMAIN, APP_ENVIRONMENT } = import.meta.env;

export default React.createContext(LANGUAGE_EN);
export const LanguageChangeContext = React.createContext(() => {});

export const changeLanguageHandler = (callback) => async (languageName) => {
    const cookies = new Cookies();

    // domain will not work on localhost, but works after the deployment
    // if (APP_ENVIRONMENT === 'production') {
    //     cookies.set(COOKIE_LANGUAGE, languageName, {
    //         path: '/',
    //         domain: `.${APP_DOMAIN}`,
    //     });
    // } else {
    cookies.set(COOKIE_LANGUAGE, languageName, {
        path: '/',
    });
    // }

    // Changing global localisation for dayjs first
    // because updating i18next will lead to recreating
    // instances of dayjs with new localisation
    // import.meta.globEager(`./node_modules/dayjs/locale/${languageName}`);
    dayjs.locale(languageName);

    initI18next.changeLanguage(languageName);

    callback(languageName);
};
