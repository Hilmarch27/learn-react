import { Todo } from "@/types/todo-types";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./actions-types";

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (todo: Todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});
