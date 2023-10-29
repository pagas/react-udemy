import classes from './Counter.module.css';
import store, { CounterTypes } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // auto add and clear store subscription
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    store.dispatch({ type: CounterTypes.TOGGLE_SHOW_COUNTER })
  };

  const addCounterHandler = () => dispatch({ type: CounterTypes.ADD });
  const addCounter5Handler = () => dispatch({ type: CounterTypes.ADD, step: 5 });
  const reduceCounterHandler = () => dispatch({ type: CounterTypes.REDUCE });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={addCounterHandler}>Add</button>
        <button onClick={addCounter5Handler}>Add 5</button>
        <button onClick={reduceCounterHandler}>Reduce</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>

    </main>
  );
};

export default Counter;
