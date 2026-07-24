import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: [],
  loading: false,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPages, setLoading } = pageSlice.actions;

export default pageSlice.reducer;