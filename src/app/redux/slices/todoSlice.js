import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    modifyTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { modifyTasks } = todoSlice.actions;
export default todoSlice.reducer;
