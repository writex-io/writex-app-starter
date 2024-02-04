import { getContext } from 'redux-saga/effects';
import apiMethodWithRetry from '@core/mechanisms/api-method-with-retry';
import { EmptyError } from '../../models/error';

const GET_ATTEMPTS = 5;
const GET_DELAY = 2000;

export function* getUserApi() {
    const api = yield getContext('api');
    return yield apiMethodWithRetry(() => api.User.get(), {
        retry: GET_ATTEMPTS,
        retryDelay: GET_DELAY,
        ErrorClass: EmptyError,
    });
}

export function* getUserProfileApi(userId) {
    const api = yield getContext('api');
    return yield apiMethodWithRetry(() => api.Profile.get(userId), {
        retry: GET_ATTEMPTS,
        retryDelay: GET_DELAY,
        ErrorClass: EmptyError,
    });
}
