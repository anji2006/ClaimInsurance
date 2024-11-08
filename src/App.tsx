import { useState } from "react";
import Claim from "./views/claimForm/Claim"
import ClaimContextProvider, { defaultData } from "./store/claimContext";
import { CustomObject } from "./utils/types";
import ProgressContextProvider, { defaultProgressData, ProgressData } from "./store/progressContext";

function App() {
  const [claimData, setClaimData] = useState<CustomObject>(defaultData);
  const [progressData, setProgressData] = useState<ProgressData[]>(defaultProgressData);

  return (
    <ClaimContextProvider value={{claimData, setClaimData}}>
      <ProgressContextProvider value={{progressData, setProgressData}}>
        <Claim />
      </ProgressContextProvider>
    </ClaimContextProvider>
  )
}

export default App
