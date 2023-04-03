import { atom } from "recoil";
import { ITodo } from "../../types";

export const todoListState = atom<ITodo[]>({
    key: "todoListState",
    default: []
})

