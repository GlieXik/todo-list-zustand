import { statusFilters } from "utils/constants";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const localStorageKey = "todoStore";

export const useTodoStore = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [
          { id: 1, text: "test", completed: false },
          { id: 2, text: "test2", completed: true },
          { id: 3, text: "test2", completed: true },
        ],
        addTodo: text => {
          const todos = get().todos;
          set({
            todos: [...todos, { id: Date.now(), text, completed: false }],
          });
        },
        removeTodo: id =>
          set(state => ({
            todos: state.todos.filter(todo => todo.id !== id),
          })),
        toogleTodo: id =>
          set(state => ({
            todos: state.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          })),
      }),
      { name: localStorageKey, storage: localStorage } // Specify storage implementation
    )
  )
);

export const useFilterStore = create(set => ({
  filter: statusFilters.all,
  setFilter: filter => set({ filter }),
}));
