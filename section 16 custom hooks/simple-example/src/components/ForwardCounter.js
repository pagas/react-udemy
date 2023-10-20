
import useCounter from '../hooks/use-counter';

import Card from './Card';
import { CounterType } from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter(CounterType.forward);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
