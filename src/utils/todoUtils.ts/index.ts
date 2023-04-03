import { v4 } from "uuid";
import { ITodo } from "../../types";

export const createTodoItem = (inputValue: string): ITodo => ({
    id: v4(),
    text: inputValue,
    isComplete: false,
})

export const replaceItemAtIndex = <T>(arr: T[], index: number, newValue: T): T[] => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export const removeItemAtIndex = <T>(arr: T[], index: number)  => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}