import { useAppDispatch, useAppSelector } from "../app/hook";
import { updateStep } from "../features/pagination/paginationSlice";

const Pagination = () => {
  const { totalStep, currentStep } = useAppSelector(
    (state) => state.pagination
  );
  const { selectedMeal, selectedRestaurant, selectedDish, noOfPeople } =
    useAppSelector((state) => state.order);

  const totalNoOfDishes = selectedDish.reduce(
    (cur, acc) => cur + acc.noOfServing,
    0
  );

  const dispatch = useAppDispatch();

  const _handleStepClick = (step: number) => {
    if (currentStep == 1 && !selectedMeal) {
      alert("Please Select a Meal!");
      return;
    } else if (currentStep == 1 && !noOfPeople) {
      alert("Please Enter number of People!");
      return;
    } else if (currentStep === 1 && noOfPeople && step === 2) {
      dispatch(updateStep(step));
    }

    if (currentStep === 2 && step < currentStep) {
      dispatch(updateStep(step));
    } else if (currentStep == 2 && !selectedRestaurant) {
      alert("Please Select a Restaurant!");
      return;
    } else if (
      (currentStep === 2 && selectedRestaurant && step === 3) ||
      totalNoOfDishes >= noOfPeople
    ) {
      dispatch(updateStep(step));
    }

    if (currentStep === 3 && step < currentStep) {
      dispatch(updateStep(step));
    } else if (currentStep == 3 && totalNoOfDishes < noOfPeople) {
      alert("Amount of Dishes should be equal or more than amount of people.");
      return;
    } else if (currentStep == 3 && totalNoOfDishes >= noOfPeople) {
      dispatch(updateStep(step));
    }

    if (step < currentStep) {
      dispatch(updateStep(step));
    }
  };

  return (
    <div className="inline-flex">
      {new Array(totalStep).fill(null).map((v, k) => (
        <button
          key={k}
          className={
            "px-4 py-2 text-sm font-medium border border-gray-200 focus:z-10 cursor-pointer outline-none " +
            `${
              k + 1 === currentStep
                ? "text-white bg-sky-500 font-black"
                : " text-gray-400 font-normal"
            }`
          }
          disabled={k + 1 === currentStep}
          onClick={() => {
            _handleStepClick(k + 1);
          }}
        >
          {k + 1 === totalStep ? "Review" : "Step" + " " + (k + 1)}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
