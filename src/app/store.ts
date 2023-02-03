import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/pagination/paginationSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    order: orderReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
