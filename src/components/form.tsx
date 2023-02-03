import { useAppSelector } from "../app/hook";
import { NavigationButton } from "./navigationButton";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

const Form = () => {
  const { totalStep, currentStep } = useAppSelector(
    (state) => state.pagination
  );
  return (
    <form
      onSubmit={(e) => {
        console.log("final result===>");
      }}
    >
      <div className="w-3/4">
        {currentStep === 1 ? (
          <Step1 />
        ) : currentStep === 2 ? (
          <Step2 />
        ) :currentStep === 3 ? (
          <Step3 />
        ):<Step4/>}
        <NavigationButton />
      </div>
    </form>
  );
};

export default Form;
