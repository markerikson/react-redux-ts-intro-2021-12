import { createSelector } from "@reduxjs/toolkit";

const selectA = state => state.a;
const selectB = state => state.b;

const selectABC = createSelector(
  [selectA, selectB],
  (a, b, someField) => {
    return a + b;
  }
);
