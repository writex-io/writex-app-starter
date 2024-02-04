import get from 'lodash/get';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { actionType } from './action-type';

const initialState = {
    theme: 'light',
};

export const CHANGE_REQUEST = actionType('CHANGE_REQUEST');
export const CHANGE_THEME = actionType('CHANGE_THEME');

export const changeRequestAction = createAction(CHANGE_REQUEST);
export const changeAction = createAction(CHANGE_THEME);

export const themeNameSelector = (state) => get(state, 'theme.theme', 'light');

export const emptyReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeAction.type, (state, action) => {
            state.theme = action.payload;
        });
});

export default emptyReducer;
