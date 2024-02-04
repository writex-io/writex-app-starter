import {
    all,
    takeLatest,
    put,
} from 'redux-saga/effects';

import {
    CHANGE_REQUEST,
} from '../reducers/theme';

// eslint-disable-next-line consistent-return
export function* themeChangeHandler(action) {

}

export function* themeSagaWeb() {
    yield all([
        takeLatest(CHANGE_REQUEST, themeChangeHandler),
    ]);
}
