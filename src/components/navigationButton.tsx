import { useAppDispatch, useAppSelector } from "../app/hook";
import { addStep, reduceStep } from "../features/pagination/paginationSlice";
export const NavigationButton = () => {
  const { totalStep, currentStep } = useAppSelector(
    (state) => state.pagination
  );
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between">
      {currentStep > 1 ? (
        <button
          className="bg-sky-500 text-white p-2 rounded "
          onClick={(e) => {
            e.preventDefault();
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
          className="bg-sky-500 text-white p-2 rounded"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addStep());
          }}
        >
          Submit
        </button>
      ) : (
        <button
          className="bg-sky-500 text-white p-2 rounded"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addStep());
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
