import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListTodo from "./components/List";
import CreateTodo from "./components/Create";
import { useState } from "react";
import { Todo } from "@/types/todo-types";

const IndexTodo = () => {
  const [todo, setTodo] = useState<Todo | null>(null);

  return (
    <div className="flex justify-center items-center h-screen">
      <Tabs defaultValue="todo" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="todo">Todo</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <TabsContent value="todo">
          <Card>
            <CardHeader>
              <CardTitle>Todo</CardTitle>
              <CardDescription>
                Make changes to your Todo here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <CreateTodo setTodo={setTodo} todo={todo} />
              <div className="my-4">
                <ListTodo setTodo={setTodo} />
              </div>
            </CardContent>
            <CardFooter>
              <small>@hilmarch{new Date().getFullYear()}</small>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="done">
          <Card>
            <CardHeader>
              <CardTitle>done</CardTitle>
              <CardDescription>
                Change your done here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            
              <ListTodo setTodo={setTodo} isDone={true} />

            </CardContent>
            <CardFooter>
              <small>@hilmarch{new Date().getFullYear()}</small>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndexTodo;
