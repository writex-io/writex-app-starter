import 'raf/polyfill';
import 'setimmediate';

import { Provider } from 'app/provider';
import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
    web: 'css',
    default: 'native'
});

import Cookies from 'universal-cookie';

import { LANGUAGE_EN } from 'app/core/constants/languages';
import { COOKIE_THEME, COOKIE_LANGUAGE } from 'app/core/constants/cookies';
import { THEME_LIGHT } from 'app/core/constants/themes';

import LanguageContext, { LanguageChangeContext, changeLanguageHandler } from './provider/language';
import ThemeContext, { ThemeChangeContext, changeThemeHandler } from './provider/theme';

import '../global.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

    const cookies = new Cookies();

    const languageCookieParsed = cookies.get(COOKIE_LANGUAGE);
    const languageCookie = languageCookieParsed || LANGUAGE_EN;

    const themeCookieParsed = cookies.get(COOKIE_THEME);
    const themeCookie = themeCookieParsed || THEME_LIGHT;

    const [language, setLanguage] = useState(languageCookie);
    const [theme, setTheme] = useState(themeCookie);

    useEffect(() => {
        changeLanguageHandler(setLanguage)(languageCookie);
    }, []);


    return (
        <>
            <Head>
                <title>Solito Example App</title>
                <meta
                    name="description"
                    content="Expo + Next.js with Solito. By Fernando Rojo."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider>
                <LanguageChangeContext.Provider value={changeLanguageHandler(setLanguage)}>
                    <LanguageContext.Provider value={language}>
                        <ThemeChangeContext.Provider value={changeThemeHandler(setTheme)}>
                            <ThemeContext.Provider value={theme}>
                                <Component {...pageProps} />
                            </ThemeContext.Provider>
                        </ThemeChangeContext.Provider>
                    </LanguageContext.Provider>
                </LanguageChangeContext.Provider>
            </Provider>
        </>
    );
}

export default MyApp;
