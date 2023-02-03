import { useAppDispatch, useAppSelector } from "../app/hook";
import { updateStep } from "../features/pagination/paginationSlice";

const Pagination = () => {
  const { totalStep, currentStep } = useAppSelector(
    (state) => state.pagination
  );
  const dispatch = useAppDispatch();

  return (
    <div className="inline-flex rounded-md shadow-sm">
      {new Array(totalStep).fill(null).map((v, k) => (
        <span
          key={k}
          onClick={() => dispatch(updateStep(k + 1))}
          className={"px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white cursor-pointer"}
        >
          {k + 1 === totalStep ? "Preview" : "Step" +" "+ (k + 1)}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
