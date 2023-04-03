import { useRecoilValue } from "recoil"
import { Counter, TodoItemCreator, TodoItem } from "../../components"
import { todoListState } from "../../state"

const Home = () => {
    const todoLists = useRecoilValue(todoListState)
    return <div>
        <Counter />
        <TodoItemCreator />
        {todoLists.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
        ))}
    </div>
}

export default Home