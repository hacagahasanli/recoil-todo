import { ITodo } from "../types"

interface ToDoItemProps {
    item: ITodo
}

export const TodoItem = ({ item }: ToDoItemProps) => {
    const { id, title, completed } = item
    return <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
}