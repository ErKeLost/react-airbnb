import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services";
export const fetchHomeData = createAsyncThunk(
  "getGoodPrice",
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPrice(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScoreInfo: {},
  },
  reducers: {
    changeGoodPrice(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeData.fulfilled](state, { payload }) {
    //   state.goodPrice = payload;
    // },
  },
});
export const { changeGoodPrice, changeHighScoreInfo } = homeSlice.actions;
export default homeSlice.reducer;
