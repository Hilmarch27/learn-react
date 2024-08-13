import { Todo } from "@/types/todo-types";
import { createContext } from "react";

type TodoContextValue = {
  todos: Todo[];
  setTodos?: (todos: Todo[]) => void;
  addTodo?: (todo: Todo) => void;
  removeTodo?: (todo: Todo) => void;
  updateTodo?: (todo: Todo) => void;
};

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);
