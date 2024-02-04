import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';
import counterReducer from 'app/logic/empty/reducers/empty';
import { rootSaga } from 'app/logic/root-saga';

export default function configureApplicationStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            counter: counterReducer,
        },

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                sagaMiddleware,
                logger,
            ]),
    });

    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        const join = require('path').join;
        module.hot.accept(join(__dirname, '../logic'), () => store.replaceReducer(rootReducer));
    }

    return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
