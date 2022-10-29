import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
const store = configureStore({
  reducer: {
    entire: entireReducer,
    home: homeReducer,
  },
});

export default store;
