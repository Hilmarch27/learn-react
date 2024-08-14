import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/reducers";
import { Todo } from "@/types/todo-types";
import { CircleCheck, Pencil, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "@/redux/actions/todo-actions";

const ListTodo = ({
  setTodo,
  isDone,
}: {
  setTodo: (todo: Todo) => void;
  isDone?: boolean;
}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  const completeTodos = todos.filter((todo: Todo) => todo.isCompleted);

  const handleRemoveTodo = (todo: Todo) => {
    dispatch(removeTodo(todo.id));
  };

  const handleUpdateTodo = (todo: Todo) => {
    setTodo(todo);
  };

  const handleCompleteTodo = (todo: Todo) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <>
      {isDone ? (
        <ul>
          {completeTodos.map((todo: Todo) => (
            <li key={todo.id} className="grid grid-cols-2 my-1">
              <div className="flex gap-2">
                <Button
                  className="text-green-500 border-green-500"
                  onClick={() => handleCompleteTodo(todo)}
                  type="button"
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
                  type="button"
                  variant="outline"
                  size="icon"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => handleRemoveTodo(todo)}
                  type="button"
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
          {todos.map((todo: Todo) => (
            <li key={todo.id} className="grid grid-cols-2 my-1">
              <div className="flex gap-2">
                <Button
                  className={
                    todo.isCompleted ? "text-green-500 border-green-500" : ""
                  }
                  onClick={() => handleCompleteTodo(todo)}
                  type="button"
                  variant="outline"
                  size="icon"
                >
                  <CircleCheck className="h-4 w-4" />
                </Button>
                <p
                  className={`my-auto ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo.title}
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  onClick={() => handleUpdateTodo(todo)}
                  type="button"
                  variant="outline"
                  size="icon"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => handleRemoveTodo(todo)}
                  type="button"
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
