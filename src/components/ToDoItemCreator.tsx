import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../state";
import { v4 } from "uuid"
import { ITodo } from "../types";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);
  const value = useRecoilValue(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList: ITodo[]) => [
      {
        id: v4(),
        text: inputValue,
        isComplete: false,
      },
      ...oldTodoList,
    ]);
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
      <span>{value[0]?.text}</span>
    </div>
  );
}

export default TodoItemCreator