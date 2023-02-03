import { useAppSelector } from "../app/hook";
import dishData from "../assets/dishes.json";
export const Step2 = () => {
  const { selectedMeal } = useAppSelector((state) => state.order);
  const filterData = dishData.dishes.filter((v,k) =>
    v.availableMeals.some((a) => a === selectedMeal)
  );


  return (
    <>
      <label htmlFor="meal">Please Select a Restaurant</label>
      <select id="meal" className="w-full p-2 rounded cursor-pointer">
        {filterData.map((v,k) => (
          <option key={k}>{v.restaurant}</option>
        ))}
      </select>
    </>
  );
};
