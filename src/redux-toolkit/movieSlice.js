import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerList: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    getBanner: (state, action) => {
      state.bannerList = action.payload;
    },
    getPagination: (state, action) => {
      state.paginationListMovie = action.payload;
    },
  },
});
export const { getBanner } = movieSlice.actions;
export default movieSlice.reducer;
