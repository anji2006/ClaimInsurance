import "./Claim.css";
import { Flex, Menu } from "antd";
import PatientInformation from "./compoents/PatientInformation";
import { useState } from "react";
import InsuredAndPayerInfo from "./compoents/InsuredAndPayerInfo";
import HelthServiceReferelInfo from "./compoents/HelthServiceReferelInfo";
import Diagnosis from "./compoents/Diagnosis";
import SubTitle from "./compoents/SubTitle";
import AdditionalClaimInfo from "./compoents/AdditionalClaimInfo";

const menuItems = [
  { key: "0", label: "Patient Information" },
  { key: "1", label: "Insured Information & Payer Information" },
  { key: "2", label: "Health Care & Referring Provider And Service Facility" },
  { key: "3", label: "Additional Claim Information" },
  { key: "4", label: "Diagnosis" },
];


export default function Claim() {
  const [page, setPage] = useState<number>(4);

  const [data, setData] = useState<any>();

  const updateData = (res: any) => {
    const finalPayload = {
      ...data,  
      ...res,
    };
    setData(finalPayload);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const onClickMenu = (e)=> {
    setPage(+e.key);
  }

  const _renderPage = () => {
    switch (page) {
      case 0:
        return (
          <PatientInformation
            setData={updateData}
            next={nextPage}
            prev={prevPage}
          />
        );
      case 1:
        return (
          <InsuredAndPayerInfo
            setData={updateData}
            next={nextPage}
            prev={prevPage}
          />
        );
      case 2:
        return (
          <HelthServiceReferelInfo
            setData={updateData}
            next={nextPage}
            prev={prevPage}
          />
        );
      case 3:
        return (
          <AdditionalClaimInfo
            setData={updateData}
            next={nextPage}
            prev={prevPage}
          />
        );
      case 4:
        return (
          <Diagnosis setData={updateData} next={nextPage} prev={prevPage} />
        );
    }
  };



  return (
    <div className="main">
      <Menu
        onClick={onClickMenu}
        style={{ width: 256 ,height: "100vh",position: "fixed"}}
        defaultSelectedKeys={["1"]}
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
