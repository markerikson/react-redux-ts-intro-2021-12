import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "Fred", age: 20, pets: [] },
  reducers: {
    updateUser: (state, { payload }) => {
      state[payload.field] = payload.value;
    }
  },
  extraReducers: {
    // Handle other action types here
    [increment]: (state, action) => {
      state.age++;
    }
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer; // "Ducks" - quack!

// Write side effects logic alongside, like thunks:
export const getUserPets = name => async dispatch => {
  const userPets = await fetchPets(name);
  dispatch(updateUser({ pets: userPets }));
  dispatch(increment());
};
