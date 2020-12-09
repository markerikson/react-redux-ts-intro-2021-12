const store = createStore(rootReducer, preloadedState);

console.log(store.getState());
// {todos : [.....], filters : {status: "SHOW_COMPLETED"}}

store.dispatch({ type: "filters/filterUpdated", payload: "SHOW_ALL" });
console.log(store.getState());
// {todos : [.....], filters : {status: "SHOW_ALL"}}

const stateBefore = store.getState();
console.log("Number of todos: ", stateBefore.todos.length);
// "Number of todos: 2"

store.subscribe(() => {
  console.log("An action was dispatched");
  const stateAfter = store.getState();
  console.log("Number of todos: ", stateAfter.todos.length);
});

store.dispatch({ type: "todos/todoAdded", payload: "Buy milk" });
// "An action was dispatched"
// "Number of todos: 3"
