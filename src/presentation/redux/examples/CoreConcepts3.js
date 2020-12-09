import { createStore, combineReducers } from "redux";

import todosReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

const store = createStore(rootReducer, preloadedState);
