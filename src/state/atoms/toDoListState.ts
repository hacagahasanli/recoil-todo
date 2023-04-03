import { atom } from "recoil";
import { ITodo } from "../../types";
import { todoListNamespace } from "../../constants";

export const todoListState = atom<ITodo[]>({
    key: todoListNamespace + "todoListState",
    default: []
})

