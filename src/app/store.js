import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import customCounterReducer from "../rtk/customCounterSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: customCounterReducer,
  },
});
