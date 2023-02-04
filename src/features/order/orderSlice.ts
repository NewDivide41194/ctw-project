import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface orderState {
  mealOptions: { value: number; label: string }[]; //Move to component

  selectedMeal: string;
  selectedRestaurant: string;
}

// Define the initial state using that type
const initialState: orderState = {
  selectedMeal: "",
  selectedRestaurant: "",
  mealOptions: [
    { value: 0, label: "breakfast" },
    { value: 1, label: "lunch" },
    { value: 2, label: "dinner" },
  ],
};

export const orderSlice = createSlice({
  name: "order",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    selectMeal: (state, action: PayloadAction<string>) => {
      state.selectedMeal = action.payload;
    },
    selectRestaurant: (state, action: PayloadAction<string>) => {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { selectMeal } = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.order;

export default orderSlice.reducer;
