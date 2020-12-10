interface Todo {
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  status: "idle" | "loading";
}

// Declare type of initial state
const initialState: TodosState = {
  todos: [],
  status: "idle",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Declare type of actions in createSlice
    todoAdded(state, action: PayloadAction<Todo>) {
      state.push(action);
    },
    todoToggled(state, action: PayloadAction<number>) {
      const todo = state[index];
      todo.completed = !todo.completed;
    },
  },
});
