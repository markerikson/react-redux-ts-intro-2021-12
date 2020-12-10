// App state: a plain object with many keys or "slices"
const todoAppState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something!", completed: false, color: "blue" },
  ],
  filters: {
    status: "Active",
    colors: ["red", "blue"],
  },
};

// Actions: plain objects with a "type" field
const a1 = { type: "todos/todoAdded", payload: "Go to swimming pool" };
const a2 = { type: "todos/todoToggled", payload: 1 };
const a3 = { type: "filters/visibilityUpdated", payload: "SHOW_ALL" };
