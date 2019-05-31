import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", age: 20 },
  reducers: {
    // mutate the state all you want with immer
    updateUser: (state, { payload }) => {
      state[payload.field] = payload.value;
    }
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer; // "Ducks" - quack!

// Use this elsewhere in the app:
import userReducer, { updateUser } from "./userSlice";

const rootReducer = combineReducers({
  user: userReducer
});

store.dispatch(updateUser({ field: "name", value: "Eric" }));
