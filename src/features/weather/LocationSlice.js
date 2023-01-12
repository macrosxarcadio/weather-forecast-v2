import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const locationSlice = createSlice({
  name: "Location",
  initialState,
  reducers: {
    setNewLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewLocation } = locationSlice.actions;

export default locationSlice.reducer;
