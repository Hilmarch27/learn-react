import { combineReducers } from "redux";
import todoReducer from "./todo-reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
