import "./Claim.css";
import { Flex, Steps } from "antd";
import PatientInformation from "./compoents/PatientInformation";
import { useState } from "react";
import InsuredAndPayerInfo from "./compoents/InsuredAndPayerInfo";
import HelthServiceReferelInfo from "./compoents/HelthServiceReferelInfo";
import Diagnosis from "./compoents/Diagnosis";
import SubTitle from "./compoents/SubTitle";
import AdditionalClaimInfo from "./compoents/AdditionalClaimInfo";
import { defaultData, useClaimContext } from "../../store/claimContext";
import { defaultProgressData, useProgressContext } from "../../store/progressContext";


export default function Claim() {
  const [page, setPage] = useState<number>(0);
  const {setClaimData} = useClaimContext();
  const {progressData, setProgressData} = useProgressContext();

  const handleChangeSteps = (current: number) => {
    if (current < page) {
      setPage(current);
      setProgressData(progressData.map(obj => ({
        ...obj,
        disabled: current < obj.index
      })))
    }
  };

  const handleReset = () => {
    setPage(0);
    setClaimData(defaultData);
    setProgressData(defaultProgressData)
  };

  const nextPage = () => {
    setPage(page + 1);
    setProgressData(progressData.map(obj => ({
      ...obj,
      disabled: obj.index > page + 1
    })));
  };

  const prevPage = () => {
    setPage(page - 1);
    setProgressData(progressData.map(obj => ({
      ...obj,
      disabled: obj.index > page - 1
    })));
  };

  const _renderPage = () => {
    switch (page) {
      case 0:
        return (
          <PatientInformation
            next={nextPage}
          />
        );
      case 1:
        return (
          <InsuredAndPayerInfo
            next={nextPage}
            prev={prevPage}
          />
        );
      case 2:
        return (
          <HelthServiceReferelInfo
            next={nextPage}
            prev={prevPage}
          />
        );
      case 3:
        return (
          <AdditionalClaimInfo
            next={nextPage}
            prev={prevPage}
          />
        );
      case 4:
        return (
          <Diagnosis onReset={handleReset} prev={prevPage} />
        );
    }
  };

  return (
    <div className="main">
      <Flex vertical={true} justify="center" align="center">
        <SubTitle level={3} className="claim-subtitle" title="Claim Form" />
        <div style={{width: '80%', marginBlock: 20}}>
          <Steps onChange={handleChangeSteps} current={page} progressDot items={progressData} />
        </div>
        <div className="form-container">{_renderPage()}</div>
      </Flex>
    </div>
  );
}
