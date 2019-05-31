import { createReducer } from "@reduxjs/toolkit";

function addTodo(state, action) {
  // Can safely call state.push() here
  state.push({ text: action.payload, completed: false });
}

function toggleTodo(state, action) {
  const { index } = action.payload;

  const todo = state[index];
  // Can directly modify the todo object
  todo.completed = !todo.completed;
}

const todosReducer = createReducer([], {
  ADD_TODO: addTodo,
  TOGGLE_TODO: toggleTodo
});
