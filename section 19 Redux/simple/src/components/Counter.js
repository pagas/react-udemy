import classes from './Counter.module.css';
import { couterActions } from '../store/counter-slice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // auto add and clear store subscription
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(couterActions.toggleShowCounter())
  };

  const addCounterHandler = () => dispatch(couterActions.increment());
  const addCounter5Handler = () => dispatch(couterActions.increment(5));
  const reduceCounterHandler = () => dispatch(couterActions.decrement());

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
