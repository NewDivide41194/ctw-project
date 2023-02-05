import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { changeNoOfPeople, selectMeal } from "../features/order/orderSlice";

export const Step1 = () => {
  const { mealOptions, selectedMeal,noOfPeople } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <div className="pb-5">
        <label htmlFor="meal">Please Select a meal</label>
        <select
          id="meal"
          className="w-full p-2 rounded border cursor-pointer"
          value={selectedMeal}
          onChange={(e) => dispatch(selectMeal(e.target.value))}
        >
          <option disabled selected value="">
            Select a meal
          </option>
          {mealOptions.map((v, k) => (
            <option key={k} value={v.label}>
              {v.label.charAt(0).toUpperCase() + v.label.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="people">Please Enter Number of people</label>
        <input
          id="people"
          type="number"
          min={1}
          max={10}
          value={noOfPeople}
          className="w-full p-2 rounded border"
          onChange={(e) => dispatch(changeNoOfPeople(Number(e.target.value)))}
        />
      </div>
    </React.Fragment>
  );
};
