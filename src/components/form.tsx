import { useAppSelector } from "../app/hook";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

const Form = () => {
  const { currentStep } = useAppSelector((state) => state.pagination);

  return (
    <div className="py-10 min-h-[300px]">
      {currentStep === 1 ? (
        <Step1 />
      ) : currentStep === 2 ? (
        <Step2 />
      ) : currentStep === 3 ? (
        <Step3 />
      ) : (
        <Step4 />
      )}
    </div>
  );
};

export default Form;
