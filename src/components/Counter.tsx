import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, counterState } from '../state';

interface CounterState {
  count: number;
}

function Counter() {
  const [counter, setCounter] = useRecoilState<CounterState>(counterState);
  const count = useRecoilValue(charCountState)

  const incrementCounter = () => {
    setCounter({ count: counter.count + 1 });
  };

  return (
    <div>
      <p>Count: {counter.count}</p>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;