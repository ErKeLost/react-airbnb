import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeRecommend,
} from "@/services";
export const fetchHomeData = createAsyncThunk(
  "getGoodPrice",
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPrice(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountList(res));
    });
    getHomeRecommend().then((res) => {
      dispatch(changeHotRecommend(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScoreInfo: {},
    discountList: {},
    hotRecommend: {},
  },
  reducers: {
    changeGoodPrice(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountList(state, { payload }) {
      state.discountList = payload;
    },
    changeHotRecommend(state, { payload }) {
      state.hotRecommend = payload;
    },
  },
  extraReducers: {
    // [fetchHomeData.fulfilled](state, { payload }) {
    //   state.goodPrice = payload;
    // },
  },
});
export const {
  changeGoodPrice,
  changeHighScoreInfo,
  changeDiscountList,
  changeHotRecommend,
} = homeSlice.actions;
export default homeSlice.reducer;
