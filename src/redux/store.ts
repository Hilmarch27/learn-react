import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todo-slice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
