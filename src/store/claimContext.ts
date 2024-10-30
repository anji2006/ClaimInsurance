import { createContext, useContext } from "react";
import { CustomObject } from "../utils/types";

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
