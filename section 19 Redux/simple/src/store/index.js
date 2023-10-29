import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state, action) => {
    let newState = { ...state };
    
    if (action.type === 'add') {
        newState.counter = state.counter + (action.step ? action.step : 1);
    }
    if (action.type === 'reduce') {
        newState.counter = state.counter - (action.step ? action.step : 1);
    }
    if (action.type === 'TOGGLE_SHOW_COUNTER') {
        newState.showCounter = !state.showCounter;
    }

    return newState;
}

const store = createStore(counterReducer, initialState);
export default store;