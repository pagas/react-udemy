import { createStore } from 'redux';

export const CounterTypes = {
    ADD: 'ADD',
    REDUCE: 'REDUCE',
    TOGGLE_SHOW_COUNTER: 'TOGGLE_SHOW_COUNTER'
}

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state, action) => {
    let newState = { ...state };

    if (action.type === CounterTypes.ADD) {
        newState.counter = state.counter + (action.step ? action.step : 1);
    }
    if (action.type === CounterTypes.REDUCE) {
        newState.counter = state.counter - (action.step ? action.step : 1);
    }
    if (action.type === CounterTypes.TOGGLE_SHOW_COUNTER) {
        newState.showCounter = !state.showCounter;
    }

    return newState;
}

const store = createStore(counterReducer, initialState);
export default store;