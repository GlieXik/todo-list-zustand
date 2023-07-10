import { useTodoStore } from "store/store";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const todos = useTodoStore(state => state.todos);

  const count = todos.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>

      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
