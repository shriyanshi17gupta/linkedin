import { configureStore } from "@reduxjs/toolkit";
import FeedDataRender from "./InitialData";
const Store = configureStore({
  reducer: {
    Feed: FeedDataRender,
  },
});

export default Store;
