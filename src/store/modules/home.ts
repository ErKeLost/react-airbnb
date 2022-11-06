import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeRecommend,
  getHomeLongfor,
  getHomePlusData,
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
    getHomeLongfor().then((res) => {
      dispatch(changeHomeLongfor(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changeHomePlus(res));
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
    longForData: {},
    homePlus: {},
  },
  reducers: {
    changeHomePlus(state, { payload }) {
      state.homePlus = payload;
    },
    changeGoodPrice(state, { payload }) {
      state.goodPrice = payload;
    },
    changeHomeLongfor(state, { payload }) {
      state.longForData = payload;
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
  changeHomeLongfor,
  changeHomePlus
} = homeSlice.actions;
export default homeSlice.reducer;
