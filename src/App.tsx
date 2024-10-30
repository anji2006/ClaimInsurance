import { useState } from "react";
import Claim from "./views/claimForm/Claim"
import ClaimContextProvider, { defaultData } from "./store/claimContext";
import { CustomObject } from "./utils/types";

function App() {
  const [claimData, setClaimData] = useState<CustomObject>(defaultData);

  console.log('++++++++++++++++++++++claimData', claimData);

  return (
    <ClaimContextProvider value={{claimData, setClaimData}}>
      <Claim />
    </ClaimContextProvider>
  )
}

export default App
