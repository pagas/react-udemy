import { createStore } from 'redux';

const initialState = { counter: 0 }

const counterReducer = (state, action) => {
    if (action.type === 'add') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'reduce') {
        return { counter: state.counter - 1 }
    }
    return state;
}

const store = createStore(counterReducer, initialState);
export default store;