import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const booksAdapter = createEntityAdapter({
  // Assume IDs are stored in a field other than `book.id`
  selectId: book => book.bookId,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.title.localeCompare(b.title)
});

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    // Can pass adapter functions directly as case reducers
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action) {
      // Or, call them as "mutating" helpers in a case reducer
      booksAdapter.setAll(state, action.payload.books);
    }
  }
});

// Can create a set of memoized selectors
const booksSelectors = booksAdapter.getSelectors(state => state.books);
const allBooks = booksSelectors.selectAll(store.getState());
