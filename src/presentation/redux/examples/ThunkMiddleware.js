const thunkMiddleware = storeAPI => next => action => {
  // If the "action" is actually a function instead...
  if (typeof action === "function") {
    // then call the function
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action);
};

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middlewareEnhancer);

// Write a function that has `dispatch` and `getState` as args
const fetchSomeData = (dispatch, getState) => {
  // Make an async HTTP request
  client.get("todos").then(todos => {
    // Dispatch an action with the todos we received
    dispatch({ type: "todos/todosLoaded", payload: todos });
    // Check the updated store state after dispatching
    const allTodos = getState().todos;
    console.log("Todos after loading: ", allTodos.length);
  });
};

// Pass the _function_ we wrote to `dispatch`
store.dispatch(fetchSomeData);
// logs: 'Todos after loading: ###'
