// components/ListTodo.tsx

import { Button } from "@/components/ui/button";
import { useTodo } from "@/context/todo-context/use-todo";
import { Todo } from "@/types/todo-types";
import { CircleCheck, Pencil, X } from "lucide-react";

const ListTodo = ({
  setTodo,
  isDone,
}: {
  setTodo: (todo: Todo) => void;
  isDone?: boolean;
}) => {
  const { todos, removeTodo, updateTodo } = useTodo();
  // Filter todos to show only those that are not completed
  const completeTodos = todos.filter((todo) => todo.isCompleted === true);

  const handleRemoveTodo = (todo: Todo) => {
    removeTodo!(todo);
  };

  const handleUpdateTodo = (todo: Todo) => {
    setTodo(todo);
  };

const handleCompleteTodo = (todo: Todo) => {
  const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
  updateTodo!(updatedTodo);
};

  return (
    <>
      {isDone === true ? (
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo.id} className="grid grid-cols-2 my-1">
              <div className="flex gap-2">
                <Button
                className="text-green-500 border-green-500"
                  onClick={() => handleCompleteTodo(todo)}
                  type="submit"
                  variant="outline"
                  size="icon"
                >
                  <CircleCheck className="h-4 w-4" />
                </Button>
                <p className="my-auto text-green-500">{todo.title}</p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  onClick={() => handleUpdateTodo(todo)}
                  type="submit"
                  variant="outline"
                  size="icon"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => handleRemoveTodo(todo)}
                  type="submit"
                  variant="outline"
                  size="icon"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="grid grid-cols-2 my-1">
              <div className="flex gap-2">
                <Button
                  className={
                    todo.isCompleted === false
                      ? ""
                      : "text-green-500 border-green-500"
                  }
                  onClick={() => handleCompleteTodo(todo)}
                  type="submit"
                  variant="outline"
                  size="icon"
                >
                  <CircleCheck className="h-4 w-4" />
                </Button>
                <p className={`my-auto ${todo.isCompleted === false ? "" : "line-through"}`}>{todo.title}</p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  onClick={() => handleUpdateTodo(todo)}
                  type="submit"
                  variant="outline"
                  size="icon"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => handleRemoveTodo(todo)}
                  type="submit"
                  variant="outline"
                  size="icon"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListTodo;
