import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: [],
  title: null,
  content: null,
  price: null,
  tradeLocation: { si: null, gu: null, dong: null },
  specificLocation: null,
  isShared: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setTradeLocation: (state, action) => {
      return {
        ...state,
        tradeLocation: action.payload,
      };
    },
    addPost: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { addPost, setTradeLocation } = postSlice.actions;
export default postSlice.reducer;
