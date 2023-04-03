import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, counterState } from '../state';
import { ICounterState } from '../types';

function Counter() {
  const [counter, setCounter] = useRecoilState<ICounterState>(counterState);
  const count = useRecoilValue(charCountState)

  const incrementCounter = () => {
    setCounter({ count: counter.count + 1 });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;