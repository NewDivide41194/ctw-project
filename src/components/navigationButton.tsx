import { useAppDispatch, useAppSelector } from "../app/hook";
import { addStep, reduceStep } from "../features/pagination/paginationSlice";

export const NavigationButton = () => {

  const { totalStep, currentStep } = useAppSelector(
    (state) => state.pagination
  );

  const dispatch = useAppDispatch();

  const { selectedMeal, selectedRestaurant, selectedDish, noOfPeople } =
    useAppSelector((state) => state.order);

  const totalNoOfDishes = selectedDish.reduce(
    (cur, acc) => cur + acc.noOfServing,
    0
  );

  const _handleNextClick = () => {
    if (currentStep == 1 && !selectedMeal) {
      alert("Please Select a Meal!");
      return;
    } else if (currentStep == 1 && !noOfPeople) {
      alert("Please Enter number of People!");
      return;
    } else if (currentStep == 2 && !selectedRestaurant) {
      alert("Please Select a Restaurant!");
      return;
    } else if (currentStep == 3 && totalNoOfDishes < noOfPeople) {
      alert(
        "Amount of Dishes should be equal or greater than amount of people!"
      );
      return;
    } else {
      dispatch(addStep());
    }
  };

  return (
    <div className="flex justify-between">
      {currentStep > 1 ? (
        <button
          className="bg-gray-500 text-white p-2 px-4 rounded "
          onClick={(e) => {
            dispatch(reduceStep());
          }}
        >
          Previous
        </button>
      ) : (
        <div></div>
      )}
      {currentStep === totalStep ? (
        <button
          className="bg-sky-500 text-white p-2 px-4 rounded"
          onClick={(e) => {
            console.log("Final Result------->",{
              selectedMeal,
              selectedRestaurant,
              selectedDish,
              noOfPeople,
            });
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="bg-sky-500 text-white p-2 px-4 rounded"
          onClick={(e) => {
            _handleNextClick();
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
