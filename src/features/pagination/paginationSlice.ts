import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
interface PaginationState {
  totalStep: 4;
  currentStep: number;
}

// Define the initial state using that type
const initialState: PaginationState = {
  totalStep: 4,
  currentStep: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addStep: (state) => {
      state.currentStep += 1;
    },
    reduceStep: (state) => {
      state.currentStep -= 1;
    },
    updateStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { addStep, reduceStep, updateStep } = paginationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pagination;

export default paginationSlice.reducer;
