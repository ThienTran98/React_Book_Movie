import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setLoadingOn: (state, payload) => {
      state.isLoading = true;
    },
    setLoadingOff: (state, payload) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingOn, setLoadingOff } = spinnerSlice.actions;

export default spinnerSlice.reducer;
