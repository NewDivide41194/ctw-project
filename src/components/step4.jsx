import { useAppSelector } from "../app/hook";

export const Step4 = () => {
  const { result } = useAppSelector((state) => state.order);
  return result.map((v, k) => <div>{v.label}</div>);
};
