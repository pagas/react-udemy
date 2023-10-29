import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
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


const store = configureStore({
    reducer: counterSlice.reducer
})

export const couterActions = counterSlice.actions;
export default store;