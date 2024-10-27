import { useState } from "react";
import Claim from "./views/claimForm/Claim"
import ClaimContextProvider, { CustomObject } from "./store/claimContext";

function App() {
  const [claimData, setClaimData] = useState<CustomObject>({});

  return (
    <ClaimContextProvider value={{claimData, setClaimData}}>
      <Claim />
    </ClaimContextProvider>
  )
}

export default App
