import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../services/LocalStorageService";

const initialState = {
  user: userLocalStorage.get(),
  userBookTickets: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
    setUserBookTickets: (state, action) => {
      let newUserBookTickets = [...state.userBookTickets];
      let index = newUserBookTickets.findIndex((item) => {
        return item.tenGhe === action.payload.tenGhe;
      });
      if (index == -1) {
        let BookItem = { ...action.payload };
        newUserBookTickets.push(BookItem);
        state.userBookTickets = newUserBookTickets;
      } else {
        newUserBookTickets.splice(index, 1);
        state.userBookTickets = newUserBookTickets;
      }
    },
  },
});

export const { setUserLogin, setUserBookTickets } = userSlice.actions;
export default userSlice.reducer;
