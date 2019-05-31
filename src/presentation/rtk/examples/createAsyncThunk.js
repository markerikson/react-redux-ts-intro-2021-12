import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";

const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: { entities: [], loading: "idle" },
  reducers: {
    // standard reducer logic, with auto-generated actions
  },
  extraReducers: {
    // Add reducers for additional action types here
    [fetchUserById.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    }
  }
});

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123));
