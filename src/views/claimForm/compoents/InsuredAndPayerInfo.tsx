import { Button, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import React from "react";
import { healthCoverageOptions, states } from "../constants";
import CustomeName from "./CustomeName";
import RadioGroup from "./RadioGroup";
import Telephony from "./Telephony";
import SubTitle from "./SubTitle";

interface IProps {
  next: Function;
  prev: Function;
  setData: Function;
}

export default function InsuredAndPayerInfo({ next, prev, setData }: IProps) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    setData(values);
    next();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      title="Insured Information"
    >
      <SubTitle title="Insured Information" />
      <Row gutter={[30, 0]}>
        <Col span={16}>
          <Form.Item
            label="Insured Program:"
            name="insured_program"
            rules={[{ required: true, message: "Select one of options" }]}
          >
            <RadioGroup options={healthCoverageOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured ID Number:"
            name="insured_id"
            rules={[{ required: true, message: "Enter Insured's ID Number" }]}
          >
            <Input placeholder="Enter Insured's ID Number" maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured Name:"
            name="patient_name"
            rules={[{ required: true, message: "Enter Insured Name" }]}
          >
            <CustomeName title="Patient’s Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured Address (Street):"
            name="address"
            rules={[
              { required: true, message: "Please Enter Insured's Street" },
            ]}
          >
            <Input placeholder="Address" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured City:"
            name="city"
            rules={[{ required: true, message: "Please Enter Insured's City" }]}
          >
            <Input placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured State:"
            name={"state"}
            rules={[
              { required: true, message: "Please Select Insured's Street" },
            ]}
          >
            <Select
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
            name={"zip_code"}
            rules={[{ required: true, message: "Enter Insured's ZIP Code" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              maxLength={12}
              style={{ width: "100%" }}
              controls={false}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured Telephony (Including Area Code):"
            name={"telephony"}
            rules={[{ required: true, message: "Enter Telephony Number" }]}
          >
            <Telephony />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Insured Policy Group or FECA Number:"
            name="insured_policy_group"
          >
            <Input
              placeholder="Enter Policy Group or FECA Number"
              maxLength={29}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Insured Employer or School Name:"
            name="insured_school_name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter Employer or School Name" maxLength={29} />
          </Form.Item>
        </Col>
      </Row>
      <SubTitle title="Payer Information" />
      <Row gutter={[30, 0]}>
        <Col span={8}>
          <Form.Item
            label="Carrier WCB Carrier ID:"
            name={["payer_info", "wcb_carrier_id"]}
            rules={[
              { required: true, message: "Enter Carrier WCB Carrier ID" },
            ]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer Name:"
            name={["payer_info", "payer_name"]}
            rules={[{ required: true, message: "Enter Payer Name" }]}
          >
            <Input title="Payer's Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer Address Line 1:"
            name={["payer_info", "address1"]}
            rules={[
              { required: true, message: "Enter Payer Address (Street)" },
            ]}
          >
            <Input placeholder="Enter Payer Address 1" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer Address Line 2:"
            name={["payer_info", "address2"]}
          >
            <Input placeholder="Enter Payer Address 2" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer City:"
            name={["payer_info", "city"]}
            rules={[{ required: true, message: "Enter Payer City" }]}
          >
            <Input placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer State:"
            name={["payer_info", "state"]}
            rules={[{ required: true, message: "Select payer state" }]}
          >
            <Select
              placeholder="Payer State"
              optionFilterProp="label"
              showSearch
              options={states}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Payer ZIP Code:"
            name={["payer_info", "zip_code"]}
            rules={[{ required: true, message: "Enter Payer ZIP Code" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              maxLength={12}
              style={{ width: "100%" }}
              controls={false}
            />
          </Form.Item>
        </Col>
      </Row>
      <Flex align="center" justify="flex-end">
        <Form.Item>
          <Button type="primary" style={{marginRight: 10}} onClick={prev}>
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
