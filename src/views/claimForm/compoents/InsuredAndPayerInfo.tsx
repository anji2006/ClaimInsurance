import { Button, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import { BooleanEnum, booleanOptions, healthCoverageOptions, states } from "../constants";
import CustomeName from "./CustomeName";
import RadioGroup from "./RadioGroup";
import Telephony from "./Telephony";
import SubTitle from "./SubTitle";
import { useClaimContext } from "../../../store/claimContext";
import { MouseEventHandler } from "react";
import { CustomObject } from "../../../utils/types";
import { combineTwoObjects } from "../../../utils/functions";

interface IProps {
  next: Function;
  prev: MouseEventHandler<HTMLElement>;
}

export default function InsuredAndPayerInfo({ next, prev }: IProps) {
  const [form] = Form.useForm();
  const { claimData, setClaimData } = useClaimContext();

  const onFinish = () => {
    next();
  };

  const onValuesChange = (changedValues: CustomObject) => {
    const updatedData = combineTwoObjects(claimData, changedValues);
    setClaimData(updatedData);
  };

  console.log("------ clamin", claimData);

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={claimData}
      onValuesChange={onValuesChange}
      validateTrigger={["onChange", "onBlur"]}
      layout="vertical"
      title="Insured Information"
    >
      <SubTitle title="Insured Information" />
      <Row gutter={[30, 15]}>
        <Col span={8}>
          <Form.Item
            label="Insured Program:"
            name={["insured", "program"]}
            help="Insured Program is Required!"
            rules={[{ required: true }]}
          >
            <Select
              id="insured/program"
              placeholder="Insured Program"
              optionFilterProp="label"
              showSearch
              options={healthCoverageOptions}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Insured ID Number:" name={["insured", "id_number"]}>
            <Input
              name="insured/id-number"
              placeholder="Enter Insured's ID Number"
              maxLength={29}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured Name:"
            name="patient_name"
            help="Insured Name is Required!"
            rules={[{ required: true }]}
          >
            <CustomeName
              name="insured/name-address/last-name-first-name-middle-initial"
              title="Patient’s Name"
              maxLength={40}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Any Other Benefit play:"
            name={["insured", "another_plan_flag"]}
          >
            <RadioGroup
              name="insured/another-health-benefit-plan-flag"
              options={booleanOptions}
            />
          </Form.Item>
        </Col>
        {claimData?.patient?.employment_flag === BooleanEnum.yes && (
          <>
            <Col span={8}>
              <Form.Item
                label="Insured Address (Street):"
                name={["insured", "name_address", "address"]}
                help="Address(Street) is Required!"
                rules={[{ required: true }]}
              >
                <Input
                  name="insured/name-address/address"
                  placeholder="Address"
                  maxLength={29}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Insured City:"
                name={["insured", "name_address", "city"]}
                help="City is Required!"
                rules={[{ required: true }]}
              >
                <Input
                  name="insured/name-address/city"
                  placeholder="City"
                  maxLength={23}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Insured State:"
                name={["insured", "name_address", "state"]}
                help="State is Required!"
                rules={[{ required: true }]}
              >
                <Select
                  id="insured/name-address/state"
                  placeholder="Insured State"
                  optionFilterProp="label"
                  showSearch
                  options={states}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Insured ZIP Code:"
                name={["insured", "name_address", "zip"]}
                help="ZIP Code is Required!"
                rules={[{ required: true }]}
              >
                <Input
                  name="insured/name-address/zip"
                  placeholder="ZIP Code"
                  maxLength={12}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item // TO DO
                label="Insured Telephony (Including Area Code):"
                name={"telephony"}
                rules={[{ required: true, message: "Enter Telephony Number" }]}
              >
                <Telephony />
              </Form.Item>
            </Col>
          </>
        )}

        <Col span={8}>
          <Form.Item
            label="Insured Policy Group or FECA Number:"
            name={["insured", "policy_group_or_feca_number"]}
          >
            <Input
              name="insured/policy-group-or-feca-number"
              placeholder="Enter Policy Group or FECA Number"
              maxLength={29}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Insured Employer or School Name:"
            name={["insured", "employer_or_school_name"]}
          >
            <Input placeholder="Enter Employer or School Name" maxLength={29} />
          </Form.Item>
        </Col>
      </Row>

      <SubTitle title="Payer Information" />
      <Row gutter={[30, 15]}>
        <Col span={8}>
          <Form.Item
            label="Carrier WCB Carrier ID:"
            name={["carrier", "wcb_carrier_id"]}
            help={`First Character is "W" followed by 6 digits`}
            rules={[
              { required: true },
              {
                pattern: /^W\d{6}$/,
                message:
                  'Code must start with "W" followed by exactly 6 digits.',
              },
            ]}
          >
            <Input name="carrier/wcb-carrier-id" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer Name:"
            name={["payer", "name"]}
            help="Name is Required!"
            rules={[{ required: true }]}
          >
            <Input name="payer/name" title="Payer's Name" maxLength={41} />
          </Form.Item>
        </Col>
        {!claimData?.insured?.policy_group_or_feca_number && (
          <>
            <Col span={8}>
              <Form.Item
                label="Payer Address Line 1:"
                name={["payer", "addr1"]}
                help="Address Line 1 is Required!"
                rules={[{ required: true }]}
              >
                <Input
                  name="payer/addr1"
                  placeholder="Enter Payer Address 1"
                  maxLength={41}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Payer Address Line 2:"
                name={["payer", "addr2"]}
                help="Address Line 2 is Required!"
                rules={[{ required: true }]}
              >
                <Input
                  name="payer/addr2"
                  placeholder="Enter Payer Address 2"
                  maxLength={41}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Payer City:"
                name={["payer", "city"]}
                help="City is Required!"
                rules={[{ required: true }]}
              >
                <Input name="payer/city" placeholder="City" maxLength={24} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Payer State:"
                name={["payer", "state"]}
                help="State is Required!"
                rules={[{ required: true }]}
              >
                <Select
                  id="payer/state"
                  placeholder="Payer State"
                  optionFilterProp="label"
                  showSearch
                  options={states}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="ZIP Code"
                name={["payer", "zip"]}
                help="ZIP Code is Required!"
                rules={[{ required: true }]}
              >
                <Input name="payer/zip" placeholder="ZIP Code" maxLength={12} />
              </Form.Item>
            </Col>
          </>
        )}
      </Row>
      <Flex align="center" justify="flex-end">
        <Form.Item>
          <Button type="primary" style={{ marginRight: 10 }} onClick={prev}>
            Back
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
}
