function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoToggled": {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    default:
      return state;
  }
}
