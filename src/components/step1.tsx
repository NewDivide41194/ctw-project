import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { selectMeal } from "../features/order/orderSlice";

export const Step1 = () => {
  const { mealOptions, selectedMeal } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="pb-5">
        <label htmlFor="meal">Please Select a meal</label>
        <select
          id="meal"
          className="w-full p-2 rounded cursor-pointer"
          value={selectedMeal}
          onChange={(e) => dispatch(selectMeal(e.target.value))}
        >
          <option disabled selected value="">
            Select a meal
          </option>
          {mealOptions.map((v, k) => (
            <option key={k} value={v.value}>
              {v.label}
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
          className="w-full p-2 rounded border"
          defaultValue={1}
        />
      </div>
    </>
  );
};
