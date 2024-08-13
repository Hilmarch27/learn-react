import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTodo } from "@/context/todo-context/use-todo";
import { Todo } from "@/types/todo-types";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";

const CreateTodo = ({ todo, setTodo }: { todo: Todo | null, setTodo: (t: Todo | null) => void }) => {
  const [title, setTitle] = useState<string>("");
  const { addTodo, updateTodo } = useTodo();

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah pengiriman formulir
    if (!title.trim()) return; // Hindari menambahkan TODO kosong
    if (todo) {
      // Update existing todo
      const updatedTodo: Todo = {
        ...todo,
        title,
      };
      updateTodo!(updatedTodo);
      setTitle(""); // Reset input setelah menambahkan TODO
      setTodo(null);
    } else {
      const newTodo: Todo = {
        id: self.crypto.randomUUID(), // Simple ID generation
        title,
        isCompleted: false,
      };
      addTodo!(newTodo);
      setTitle(""); // Reset input setelah menambahkan TODO
    }
  };

  return (
    <>
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
    </>
  );
};

export default CreateTodo;
