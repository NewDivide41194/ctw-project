import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface orderState {
  totalStep: 4;
  currentStep: number;
}

const initialState: orderState = {
  totalStep: 4,
  currentStep: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
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

export const { updateStep, addStep, reduceStep } = paginationSlice.actions;

export default paginationSlice.reducer;
