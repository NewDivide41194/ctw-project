import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import dishData from "../assets/dishes.json";
import { selectRestaurant } from "../features/order/orderSlice";

export const Step2 = () => {
  const { selectedMeal, selectedRestaurant } = useAppSelector(
    (state) => state.order
  );
  const dispatch = useAppDispatch();

  const filterData = dishData.dishes.filter((v, k) =>
    v.availableMeals.some((a) => a === selectedMeal)
  );

  let uniqueRestaurant = filterData.filter(
    (value, index) =>
      index ===
      filterData.findIndex((other) => value.restaurant === other.restaurant)
  );

  return (
    <React.Fragment>
      <label htmlFor="meal">Please Select a Restaurant</label>
      <select
        id="meal"
        className="w-full p-2 rounded border cursor-pointer"
        value={selectedRestaurant}
        onChange={(e) => dispatch(selectRestaurant(e.target.value))}
      >
        <option disabled selected value="">
          Select a restaurant
        </option>
        {uniqueRestaurant.map((v, k) => (
          <option key={k}>{v.restaurant}</option>
        ))}
      </select>
    </React.Fragment>
  );
};
