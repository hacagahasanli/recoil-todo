import './App.css'
import { RecoilRoot } from 'recoil';
import { Counter, TodoItemCreator } from './components';

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <TodoItemCreator />
    </RecoilRoot>
  );
}

export default App
