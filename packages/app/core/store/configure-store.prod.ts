import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from 'app/logic/empty/reducers/empty';
import { rootSaga } from 'app/logic/root-saga';

// Define the reducers that will always be present in the application
const staticReducers = {
    counter: counterReducer,
};

function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    });
}

// runSaga is middleware.run function
// rootSaga is a your root saga for static saagas
function createSagaInjector(runSaga, rootSaga) {
    // Create a dictionary to keep track of injected sagas
    const injectedSagas = new Map();

    const isInjected = key => injectedSagas.has(key);

    const injectSaga = (key, saga) => {
        // We won't run saga if it is already injected
        if (isInjected(key)) return;

        // Sagas return task when they executed, which can be used
        // to cancel them
        const task = runSaga(saga);

        // Save the task if we want to cancel it in the future
        injectedSagas.set(key, task);
    };

    // Inject the root saga as it a staticlly loaded file,
    injectSaga('root', rootSaga);

    return injectSaga;
}

export default function configureApplicationStore() {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            ...staticReducers,
        },

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    });

    // Add injectSaga method to our store
    store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);

    // Add a dictionary to keep track of the registered async reducers
    store.asyncReducers = {};

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    // sagaMiddleware.run(rootSaga);

    return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
