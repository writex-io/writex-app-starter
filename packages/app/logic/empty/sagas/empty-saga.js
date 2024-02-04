import {
    all,
    takeLatest,
    put,
} from 'redux-saga/effects';

import {
    INCREMENT_REQUEST,
    incrementAction,
} from '../reducers/empty';

// eslint-disable-next-line consistent-return
export function* incrementHandler(action) {
    yield put(incrementAction());
}

export function* emptySaga() {
    yield all([
        takeLatest(INCREMENT_REQUEST, incrementHandler),
    ]);
}
