import "./Claim.css";
import { Flex, Menu } from "antd";
import PatientInformation from "./compoents/PatientInformation";
import { useState } from "react";
import InsuredAndPayerInfo from "./compoents/InsuredAndPayerInfo";
import HelthServiceReferelInfo from "./compoents/HelthServiceReferelInfo";
import Diagnosis from "./compoents/Diagnosis";
import SubTitle from "./compoents/SubTitle";
import AdditionalClaimInfo from "./compoents/AdditionalClaimInfo";
import { defaultData, useClaimContext } from "../../store/claimContext";

const menuItems = [
  { key: "0", label: "Patient Information" },
  { key: "1", label: "Insured & Payer Information" },
  { key: "2", label: "Health Care & Referring Provider And Service Facility" },
  { key: "3", label: "Additional Claim Information" },
  { key: "4", label: "Diagnosis" },
];


export default function Claim() {
  const [page, setPage] = useState<number>(0);
  const {setClaimData} = useClaimContext();

  const handleReset = () => {
    setPage(0);
    setClaimData(defaultData);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const onClickMenu = (e: any)=> {
    setPage(+e.key);
  }

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
      <Menu
        onClick={onClickMenu}
        style={{ width: 256 ,height: "100vh",position: "fixed"}}
        selectedKeys={[page.toString()]}
        mode="inline"
        items={menuItems}
      />
      <Flex vertical={true} justify="center" align="center" style={{marginLeft: 256}}>
        <SubTitle title="Claim Form" />
        <div className="form-container">{_renderPage()}</div>
      </Flex>
    </div>
  );
}
