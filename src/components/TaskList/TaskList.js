import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";
import { useFilterStore, useTodoStore } from "store/store";
import { statusFilters } from "utils/constants";

export const TaskList = () => {
  const filter = useFilterStore(state => state.filter);
  const todos = useTodoStore(state => {
    switch (filter) {
      case statusFilters.active:
        return state.todos.filter(todo => !todo.completed);
      case statusFilters.completed:
        return state.todos.filter(todo => todo.completed);
      default:
        return state.todos;
    }
  });
  return (
    <ul className={css.list}>
      {todos.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
