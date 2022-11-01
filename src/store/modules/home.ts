import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services";
export const fetchHomeData = createAsyncThunk("getGoodPrice", async () => {
  const res = await getHomeGoodPriceData();
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
  },
  reducers: {
    changeGoodPrice(state, { payload }) {
      state.goodPrice = payload;
    },
  },
  extraReducers: {
    [fetchHomeData.fulfilled](state, { payload }) {
      state.goodPrice = payload;
    },
  },
});
export const { changeGoodPrice } = homeSlice.actions;
export default homeSlice.reducer;
