import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todos/todosReducer";
import visibilityReducer from "./visibility/visibilityReducer";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    visibility: visibilityReducer
  }
});

/* 
The store has been created with these options:
- The slice reducers automatically passed to combineReducers()
- Added redux-thunk and mutation detection middleware
- DevTools Extension is enabled (w/ "action stack traces")
- Middleware and devtools enhancers were composed
*/
