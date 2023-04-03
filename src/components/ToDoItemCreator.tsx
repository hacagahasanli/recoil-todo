import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state";
import { v4 } from "uuid"

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => []);
    setInputValue('');
  };

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator