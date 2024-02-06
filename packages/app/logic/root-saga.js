import { all } from 'redux-saga/effects';
import { emptySaga } from 'app/logic/empty/sagas/empty-saga';

// In the root saga, we combine all static sagas together.
// Static sagas should be applicable to the entire application.

// eslint-disable-next-line import/prefer-default-export
export function* rootSaga() {
    yield all([
        emptySaga(),
    ]);
}
