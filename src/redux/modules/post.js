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
    setImage: (state, action) => {
      return {
        ...state,
        image: [...action.payload],
      };
    },
  },
});

export const { setImage, setTradeLocation } = postSlice.actions;
export default postSlice.reducer;
