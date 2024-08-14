/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/CreateTodo.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch } from "react-redux";
import { Todo } from "@/types/todo-types";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";
import { addTodo, updateTodo } from "@/redux/features/todo-slice";

const CreateTodo = ({
  todo,
  setTodo,
}: {
  todo: Todo | null;
  setTodo: (t: Todo | null) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    } else {
      setTitle("");
    }
  }, [todo]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (todo) {
      const updatedTodo: Todo = { ...todo, title };
      dispatch(updateTodo(updatedTodo));
      setTodo(null);
    } else {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      };
      dispatch(addTodo(newTodo));
    }

    setTitle("");
  };


  return (
    <form onSubmit={handleAddTodo}>
      <div className="space-y-1">
        <Label htmlFor="todo">{todo ? "Update Todo" : "Add Todo"}</Label>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            id="todo"
            placeholder="Write TODO"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="submit" variant="outline" size="icon">
            <CircleCheckBig className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateTodo;
