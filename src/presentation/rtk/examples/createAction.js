import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD_TODO");

console.log(addTodo("Buy milk"));
// {type : "ADD_TODO", payload : "Buy milk"}

console.log(addTodo.toString());
// "ADD_TODO"

console.log(addTodo.type);
// "ADD_TODO"

const todoReducer = createReducer([], {
  // Use the action creator function as the object key!
  // ES6 computed properties will coerce to string
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, completed: false });
  }
});
