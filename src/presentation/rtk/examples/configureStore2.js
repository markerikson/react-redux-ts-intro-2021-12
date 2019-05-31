import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";

// Examples of adding a middleware and a store enhancer
import logger from "redux-logger";
import { reduxBatch } from "@manaflair/redux-batch";

import todosReducer from "./todos/todosReducer";
import visibilityReducer from "./visibility/visibilityReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  visibility: visibilityReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: NODE_ENV !== "production",
  preloadedState: {},
  enhancers: [reduxBatch]
});
