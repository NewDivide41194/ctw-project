import { useAppSelector } from "../app/hook";

export const Step4 = () => {
  const { result } = useAppSelector((state) => state.order);
  return (
    <div>
      ST4
    </div>
  )
};
