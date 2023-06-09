import { useState } from "react";
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../state";
import { ITodo } from "../types";
import { createTodoItem } from "../utils";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = () => {
    setTodoList((oldTodoList: ITodo[]) => [...oldTodoList, createTodoItem(inputValue)]);
    setInputValue('');
  };

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export default TodoItemCreator