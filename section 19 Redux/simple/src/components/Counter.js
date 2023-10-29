import classes from './Counter.module.css';
import store from '../store';
import { useSelector } from 'react-redux';

const Counter = () => {
  // auto add and clear store subscription
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    store.dispatch({ type: 'add' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
