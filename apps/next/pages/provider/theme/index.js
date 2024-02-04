import React from 'react';
import Cookies from 'universal-cookie';

import { COOKIE_THEME } from 'app/core/constants/cookies';
import { THEME_LIGHT } from 'app/core/constants/themes';

export default React.createContext(THEME_LIGHT);
export const ThemeChangeContext = React.createContext((newTheme) => {});

export const changeThemeHandler = (callback) => async (themeName) => {
    const cookies = new Cookies();

    cookies.set(COOKIE_THEME, themeName, { path: '/' });

    callback(themeName);
};
