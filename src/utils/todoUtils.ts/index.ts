import { v4 } from "uuid";
import { ITodo } from "../../types";

export const createTodoItem = (inputValue: string): ITodo => ({
    id: v4(),
    text: inputValue,
    isComplete: false,
})