import { createContext, useContext } from "react";

export type ProgressData = {
  index: number;
  description?: string;
  disabled: boolean;
  icon: string;
  status?: "wait" | "process" | "finish" | "error";
  subTitle?: string;
  title: string;
}

type IState = {
    progressData: ProgressData[];
    setProgressData: React.Dispatch<React.SetStateAction<ProgressData[]>>
}

export const defaultProgressData: ProgressData[] = [
  {
    index: 0,
    disabled: false,
    icon: '',
    title: 'Patient Info'
  },
  {
    index: 1,
    disabled: true,
    icon: '',
    title: 'Insured & Payer Info'
  },
  {
    index: 2,
    disabled: true,
    icon: '',
    title: 'Health Care & Referring Provider'
  },
  {
    index: 3,
    disabled: true,
    icon: '',
    title: 'Additional Cliam Info'
  },
  {
    index: 4,
    disabled: true,
    icon: '',
    title: 'Diagnosis Info'
  }
]

const ProgressContext = createContext<IState>({
    progressData: defaultProgressData,
    setProgressData: () => {}
});

const useProgressContext = () => {
  return useContext(ProgressContext);
}

export default ProgressContext.Provider;
export { useProgressContext };
