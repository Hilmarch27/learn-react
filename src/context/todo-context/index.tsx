import { Todo } from "@/types/todo-types";
import { ReactNode, useReducer, useEffect } from "react";
import { TodoContext } from "./context";
import useLocalStorage from "@/hook/use-local";

type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "REMOVE_TODO"; payload: Todo }
  | { type: "UPDATE_TODO"; payload: Todo };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    default:
      return state;
  }
};

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [state, dispatch] = useReducer(todoReducer, todos);

  const fetchTodo = async () => {
    try {
      const response = await fetch("/data/todo.json");
      const data = await response.json();
      if (todos.length === 0) {
        setTodos(data);
      }
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  useEffect(() => {
    setTodos(state);
  }, [state, setTodos]);

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        addTodo: (todo: Todo) => dispatch({ type: "ADD_TODO", payload: todo }),
        removeTodo: (todo: Todo) =>
          dispatch({ type: "REMOVE_TODO", payload: todo }),
        updateTodo: (todo: Todo) =>
          dispatch({ type: "UPDATE_TODO", payload: todo }),
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };
