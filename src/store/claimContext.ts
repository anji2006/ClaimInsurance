import { createContext, useContext } from "react";

export type CustomObject = {
  [k: string]: any
}

type IState = {
    claimData: CustomObject;
    setClaimData: React.Dispatch<React.SetStateAction<CustomObject>>
}

const ClaimContext = createContext<IState>({
    claimData: {},
    setClaimData: () => {}
});

const useClaimContext = () => {
  return useContext(ClaimContext);
}

export default ClaimContext.Provider;
export { useClaimContext };
