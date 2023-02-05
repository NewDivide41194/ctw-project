import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/pagination/paginationSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;