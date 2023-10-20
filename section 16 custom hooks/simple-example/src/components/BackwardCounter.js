import useCounter from '../hooks/use-counter';

import Card from './Card';
import { CounterType } from '../hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(CounterType.backward);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
