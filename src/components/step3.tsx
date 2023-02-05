import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  addDishCount,
  changeNoOfServing,
  selectDish,
} from "../features/order/orderSlice";
import dishData from "../assets/dishes.json";
import React from "react";

export const Step3 = () => {
  const { selectedMeal, selectedRestaurant, dishCount, selectedDish } =
    useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  const filterData = dishData.dishes.filter(
    (v) =>
      v.availableMeals.some((a) => a === selectedMeal) &&
      v.restaurant === selectedRestaurant
  );

  const dishOptions = filterData.map((v) => {
    return { value: v.id, label: v.name };
  });

  const dishValue = (index: number) =>
    selectedDish.find((d) => d.index === index)?.dish;

  const noOfServingValue = (index: number) =>
    selectedDish.find((d) => d.index === index)?.noOfServing;

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <label>Please Select a Dish</label>
        <label>Please Enter Number of Servings</label>
        {new Array(dishCount).fill(null).map((v, k) => (
          <React.Fragment key={k}>
            <div className="">
              <select
                className="w-full p-2 rounded border cursor-pointer"
                value={dishValue(k)}
                onChange={(e) =>
                  dispatch(selectDish({ index: k, value: e.target.value }))
                }
              >
                <option disabled selected value="">
                  Select a dish
                </option>
                {dishOptions.map((v1, k1) => (
                  <option
                    disabled={selectedDish.some(
                      (d) => d.dish === dishOptions[k1].label
                    )}
                    value={v1.label}
                    key={k1}
                  >
                    {v1.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <input
                type="number"
                min={1}
                max={10}
                className="w-full p-2 rounded border"
                value={noOfServingValue(k) || 1}
                disabled={dishValue(k) ? false : true}
                onChange={(e) =>
                  dispatch(
                    changeNoOfServing({
                      index: k,
                      value: Number(e.target.value),
                    })
                  )
                }
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      {dishCount < dishOptions.length && (
        <button
          className="bg-green-500 rounded-full text-white font-bold w-10 h-10 my-4"
          disabled={dishCount !== selectedDish.length}
          onClick={() => dispatch(addDishCount())}
        >
          +
        </button>
      )}
    </div>
  );
};
