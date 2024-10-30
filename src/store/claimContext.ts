import { createContext, useContext } from "react";
import { CustomObject } from "../utils/types";

type IState = {
    claimData: CustomObject;
    setClaimData: React.Dispatch<React.SetStateAction<CustomObject>>
}

export const defaultData = {
  supplemental_information_items: [{}]
}

const ClaimContext = createContext<IState>({
    claimData: defaultData,
    setClaimData: () => {}
});

const useClaimContext = () => {
  return useContext(ClaimContext);
}

export default ClaimContext.Provider;
export { useClaimContext };
