import { createSelector } from "reselect";

// Selector untuk mengakses todos dari state
const selectTodos = (state) => state.todos.todos;

// Selector untuk mengembalikan array todos
export const selectTodosArray = createSelector(
    [selectTodos],
    (todos) => todos
);
