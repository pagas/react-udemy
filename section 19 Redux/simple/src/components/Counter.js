import classes from './Counter.module.css';
import store from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // auto add and clear store subscription
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    store.dispatch({ type: 'add' })
  };

  const addCounterHandler = () => dispatch({ type: 'add' });
  const addCounter5Handler = () => dispatch({ type: 'add', step: 5 });
  const reduceCounterHandler = () => dispatch({ type: 'reduce' });

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
