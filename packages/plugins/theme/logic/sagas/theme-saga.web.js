import {
    all,
    takeLatest,
    put,
} from 'redux-saga/effects';
import Cookies from 'universal-cookie';

import {
    CHANGE_REQUEST,
    changeAction,
} from '../reducers/theme';
import { NativeWindStyleSheet } from 'nativewind';
import { COOKIE_THEME } from 'app/core/constants/cookies';
import { THEME_LIGHT } from 'app/core/constants/themes';

// eslint-disable-next-line consistent-return
export function* themeChangeHandler(action) {
    const cookies = new Cookies();
    const themeCookieParsed = cookies.get(COOKIE_THEME) || THEME_LIGHT;
    const newColorScheme = themeCookieParsed === 'dark' ? 'light' : 'dark';
    if (document) {
        document.getElementsByTagName( 'html' )[0].classList.remove(themeCookieParsed);
        document.getElementsByTagName( 'html' )[0].classList.add(newColorScheme);
    }
    NativeWindStyleSheet.setColorScheme(newColorScheme);
    cookies.set(COOKIE_THEME, newColorScheme, { path: '/' });
    yield put(changeAction(newColorScheme));
}

export function* themeSagaWeb() {
    yield all([
        takeLatest(CHANGE_REQUEST, themeChangeHandler),
    ]);
}
