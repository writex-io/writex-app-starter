import { all, fork } from 'redux-saga/effects';
import { emptySaga } from 'app/logic/empty/sagas/empty-saga';
// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
    yield all([
        emptySaga(),
    ]);
}
