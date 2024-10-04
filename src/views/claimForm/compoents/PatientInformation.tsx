import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";

import {
  booleanOptions,
  dateFormate,
  relationOptions,
  sexOptions,
  states,
} from "../constants";
import CustomeName from "./CustomeName";
import RadioGroup from "./RadioGroup";
import Telephony from "./Telephony";
import SubTitle from "./SubTitle";
import dayjs from "dayjs";

interface IProps {
  next: Function;
  prev: Function;
  setData: Function;
}

export default function PatientInformation({ next, prev, setData }: IProps) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    
    values["birth_date"] = dayjs(values?.birth_date).format(dateFormate);
    values["signature_date"] = dayjs(values?.signature_date).format(dateFormate);

    console.log(values);

    setData(values);
    next();
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      title="Patient Information"
    >
      <SubTitle title="Patient Information" />
      <Row gutter={[30, 0]}>
        <Col span={8}>
          <Form.Item
            label="Patient's Account No:"
            name={["patient", "id_number"]}
            rules={[{ required: true, message: "Account number Required!" }]}
          >
            <Input placeholder="Enter Patitent Account Number" maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient’s Name:"
            name={["patient", "name"]}
            rules={[{ required: true, message: "Patient's Name Required!" }]}
          >
            <CustomeName title="Patient’s Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient’s Birth Date, Sex :"
          >
            <Row gutter={[15, 0]}>
              <Col>
                <Form.Item
                  name={["patient", "date_of_birth"]}
                  style={{ marginBottom: 0 }}
                  rules={[{required: true , message: "Date of Birth Required!"}]}
                >
                  <DatePicker placeholder={dateFormate} format={dateFormate} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name={["patient", "gender"]}
                  style={{ marginBottom: 0 }}
                  rules={[{required: true, message: "Please Select this field"}]}
                >
                  <RadioGroup options={sexOptions} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Address(Street) :"
            name={["patient","name_address", "address"]}
            rules={[{ required: true , message: "Enter Street Address" }]}
          >
            <Input placeholder="Address" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="City"
            name={["patient","name_address", "city"]}
            rules={[{ required: true , message: "Enter Patient's City"}]}
          >
            <Input placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="State"
            name={["patient","name_address", "state"]}
            rules={[{ required: true , message: "Enter Patient's State"}]}
          >
            <Select
              placeholder="State"
              optionFilterProp="label"
              showSearch
              options={states}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="ZIP Code"
            name={["patient","name_address", "zip"]}
            rules={[{ required: true , message: "Enter Patient's ZIP code" }]}
          >
            <InputNumber
              maxLength={12}
              style={{ width: "100%" }}
              controls={false}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            rules={[{ required: true , message: "Enter Patient's City"}]}
            label="Telephony (Including Area Code)"
            name={["patient","name_address", "telephony"]}
          >
            <Telephony />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient Relationship to Insured"
            name={"relation_to_insured"}
            name={["patient", "patient_account_no"]}
            rules={[{ required: true , message: "Select one of the options"}]}
          >
            <RadioGroup options={relationOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Employment:"
            name={["patient_condition", "employment"]}
            name={["patient", "patient_account_no"]}
            rules={[{ required: true , message: "Select one of the options"}]}
          >
            <RadioGroup options={booleanOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Auto Accident:"
            name={["patient_condition", "auto_accident"]}
            name={["patient", "patient_account_no"]}
            rules={[{ required: true, message: "Select one of the options" }]}
          >
            <RadioGroup options={booleanOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="State Where Auto Accident Occurred:"
            name={["patient_condition", "accident_occurr_at"]}
            name={["patient", "patient_account_no"]}
            rules={[{ required: true , message: "Select State from the list"}]}
          >
            <Select
              placeholder="State"
              optionFilterProp="label"
              showSearch
              options={states}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Other Accident:"
            name={["patient_condition", "other_accident"]}
            name={["patient", "patient_account_no"]}
            rules={[{ required: true , message: "Select one of the options"}]}
          >
            <RadioGroup options={booleanOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's or Authorized Person's Signature (Name):"
            name="signature"
            name={["patient", "patient_account_no"]}
            rules={[{ required: true , message: "Enter Signatrue"}]}
          >
            <Input placeholder="Enter Patient Signature" maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's or Authorized Person's Signature (Date):"
            rules={[{ required: true , message: "Select Date of Signature" }]}
            name={["signature_date"]}
            name={["patient", "patient_account_no"]}
          >
            <DatePicker placeholder={dateFormate} format={dateFormate} />
          </Form.Item>
        </Col>
      </Row>
      <Flex align="center" justify="flex-end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
}
