import { RecoilRoot } from 'recoil';
import { Counter, TodoItemCreator } from './components';
import './App.css'

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <TodoItemCreator />
    </RecoilRoot>
  );
}

export default App
