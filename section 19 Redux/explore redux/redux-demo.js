const redux = require('redux');

const initialState = { counter: 0 };

const counterReducer = (state, action) => {
    if (action.type === 'add') {
        const step = action.step != null ? action.step : 1;
        return { counter: state.counter + step };
    }
    if (action.type === 'reduce') {
        const step = action.step != null ? action.step : 1;
        return { counter: state.counter - step };
    }
    return state;
}

const store = redux.createStore(counterReducer, initialState);

const counterSubscriber = () => {
    const latestState = store.getState() // lates state sanpshot 
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'add', step: 3 });

store.dispatch({ type: 'reduce' });



const latestState = store.getState() // lates state sanpshot 
console.log('total:', latestState);