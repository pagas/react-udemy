import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state, action) {
            state.counter = state.counter + (action.payload ? action.payload : 1);
        },
        decrement(state, action) {
            state.counter = state.counter - (action.payload ? action.payload : 1);
        },
        toggleShowCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const couterActions = counterSlice.actions;

export default counterSlice.reducer;