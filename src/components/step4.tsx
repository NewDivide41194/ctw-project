import { useAppSelector } from "../app/hook";

export const Step4 = () => {
  const { selectedMeal, noOfPeople, selectedRestaurant, selectedDish } =
    useAppSelector((state) => state.order);

  return (
    <div className="grid grid-cols-2 gap-4">
      <span>Meal</span>
      <span>{selectedMeal[0].toUpperCase() + selectedMeal.slice(1)}</span>
      <span>No of People</span>
      <span>{noOfPeople}</span>
      <span>Restaurant</span>
      <span>{selectedRestaurant}</span>
      <span>Dishes</span>
      <span className="px-2 bg-gray-200 rounded">
        {selectedDish.map((v) => (
          <span className="flex py-1 justify-between">
            <span>{v.dish}</span>
            <span>{v.noOfServing}</span>
          </span>
        ))}
      </span>
    </div>
  );
};
