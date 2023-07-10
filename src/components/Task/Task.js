import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useTodoStore } from "store/store";

export const Task = ({ task }) => {
  const removeTodo = useTodoStore(state => state.removeTodo);
  const toogleTodo = useTodoStore(state => state.toogleTodo);
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={() => toogleTodo(task.id)}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={() => removeTodo(task.id)}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
