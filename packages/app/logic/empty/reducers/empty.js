import { actionType } from './action-type';
import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const INCREMENT_REQUEST = actionType('INCREMENT_REQUEST');
export const INCREMENT = actionType('INCREMENT');
export const DECREMENT = actionType('DECREMENT');
export const INCREMENT_BY_AMOUNT = actionType('INCREMENT_BY_AMOUNT');

export const incrementRequestAction = createAction(INCREMENT_REQUEST);
export const incrementAction = createAction(INCREMENT);
export const decrementAction = createAction(DECREMENT);
export const incrementByAmountAction = createAction(INCREMENT_BY_AMOUNT);

export const countSelector = (state) => state.counter.value;

export const emptyReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementAction.type, (state) => {
            state.value += 1;
        })
        .addCase(decrementAction.type, (state) => {
            state.value -= 1;
        })
        .addCase(incrementByAmountAction.type, (state, action) => {
            state.value += action.payload;
        });
});

export default emptyReducer;
