import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface orderState {
  mealOptions: { value: number; label: string }[];
  selectedMeal: string;
  noOfPeople: number;

  selectedRestaurant: string;

  dishCount: number;
  selectedDish: { index: number; dish: string; noOfServing: number }[];
}

const initialState: orderState = {
  mealOptions: [
    { value: 0, label: "breakfast" },
    { value: 1, label: "lunch" },
    { value: 2, label: "dinner" },
  ],
  selectedMeal: "",
  noOfPeople: 1,

  selectedRestaurant: "",

  dishCount: 1,
  selectedDish: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    //STEP 1
    selectMeal: (state, action: PayloadAction<string>) => {
      state.selectedMeal = action.payload;
      state.selectedRestaurant = "";
      state.selectedDish = [];
    },
    changeNoOfPeople: (state, action: PayloadAction<number>) => {
      state.noOfPeople = Math.round(action.payload);
      state.selectedDish = [];
    },
    //STEP 2
    selectRestaurant: (state, action: PayloadAction<string>) => {
      state.selectedRestaurant = action.payload;
      state.selectedDish = [];
      state.dishCount = 1;
    },
    //STEP 3
    addDishCount: (state) => {
      state.dishCount += 1;
    },
    selectDish: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      const { index, value } = action.payload;
      const dataIndex = state.selectedDish.findIndex((v) => v.index === index);
      if (dataIndex >= 0) {
        state.selectedDish[dataIndex].dish = value;
      } else {
        state.selectedDish = [
          ...state.selectedDish,
          {
            index: index,
            dish: value,
            noOfServing: 1,
          },
        ];
      }
    },
    changeNoOfServing: (
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) => {
      const { index, value } = action.payload;
      const dataIndex = state.selectedDish.findIndex((v) => v.index === index);
      if (dataIndex >= 0 && value > 0) {
        state.selectedDish[dataIndex].noOfServing = Math.round(value);
      }
    },
  },
});

export const {
  selectMeal,
  changeNoOfPeople,
  selectRestaurant,
  addDishCount,
  selectDish,
  changeNoOfServing,
} = orderSlice.actions;

export default orderSlice.reducer;
