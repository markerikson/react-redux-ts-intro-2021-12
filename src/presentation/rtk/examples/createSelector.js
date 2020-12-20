import { createSelector } from "@reduxjs/toolkit";

const selectTodos = state => state.todos;
const selectStatusFilter = state => state.filters.status;

const selectFilteredTodos = createSelector(
  [selectTodos, selectStatusFilter],
  (todos, filter) => {
    // Only recalculates output result when inputs changed
    return todos.filter(t => t.status === filter);
  }
);
