import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../services/LocalStorageService";

const initialState = {
  user: userLocalStorage.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserLogin } = userSlice.actions;
export default userSlice.reducer;
