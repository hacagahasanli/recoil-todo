import { atom } from "recoil";

interface Todo {
    id: string;
    text: string;
    isComplete: boolean;
  }

export const todoListState = atom<Todo[]>({
    key: "todoListState",
    default: []
})