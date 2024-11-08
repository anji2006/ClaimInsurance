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
  BooleanEnum,
  booleanOptions,
  dateFormate,
  relationOptions,
  sexOptions,
  states,
} from "../constants";
import CustomeName from "./CustomeName";
import RadioGroup from "./RadioGroup";
import SubTitle from "./SubTitle";
import { useClaimContext } from "../../../store/claimContext";
import { CustomObject } from "../../../utils/types";
import { combineTwoObjects } from "../../../utils/functions";

interface IProps {
  next: () => void;
}

export default function PatientInformation({ next }: IProps) {
  const [form] = Form.useForm();
  const { claimData, setClaimData } = useClaimContext();

  const onFinish = (values: CustomObject) => {
    const updatedData = combineTwoObjects(claimData, values);
    setClaimData(updatedData);
    next();
  };

  const onValuesChange = (changedValues: CustomObject) => {
    const updatedData = combineTwoObjects(claimData, changedValues);
    setClaimData(updatedData);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={claimData}
      onValuesChange={onValuesChange}
      validateTrigger={["onChange", "onBlur"]}
      layout="vertical"
      title="Patient Information"
    >
      <SubTitle className="claim-subtitle" title="Patient Information" />
      <Row gutter={[30, 20]}>
        <Col span={8}>
          <Form.Item
            label="Patient's Account No:"
            name={["patient", "patients_account_no"]}
            help="Account Number is Required!"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              controls={false}
              name="physician-or-supplier/patients-account-no"
              placeholder="Enter Patitent Account Number"
              maxLength={14}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient’s Name:" // TO DO
            name={["patient", "last_name_first_name_middle_initial"]}
            help="Patient's Name is Required!"
            rules={[{ required: true }]}
          >
            <CustomeName
              name="patient/last-name-first-name-middle-initial"
              title="Patient’s Name"
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's Birth Date:"
            name={["patient", "date_of_birth"]}
            style={{ marginBottom: 0 }}
            help="Must be <= Accident Date"
            rules={[{ required: true }]}
          >
            <DatePicker
              className="w-full"
              name="patient/date-of-birth"
              placeholder={dateFormate}
              format={dateFormate}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's Sex:"
            name={["patient", "gender"]}
            style={{ marginBottom: 0 }}
            help="Please Select this field"
            rules={[{ required: true }]}
          >
            <RadioGroup name="patient/gender" options={sexOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Address(Street) :"
            name={["patient", "name_address", "address"]}
            help="Address(Street) is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="patient/name-address/address"
              placeholder="Enter Address(Street)"
              maxLength={28}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="City"
            name={["patient", "name_address", "city"]}
            help="City is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="patient/name-address/city"
              placeholder="City"
              maxLength={24}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="State"
            name={["patient", "name_address", "state"]}
            help="State is Required!"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="State"
              optionFilterProp="label"
              showSearch
              id="patient/name-address/state"
              options={states}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="ZIP Code"
            name={["patient", "name_address", "zip"]}
            help="ZIP Code is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="patient/name-address/zip"
              placeholder="ZIP Code"
              maxLength={12}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Telephony Area Code:"
            name={["patient", "name_address", "telephony", "area_code"]}
            help="Area Code is Required!"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              controls={false}
              name="patient/name-address/telephony/area-code"
              placeholder="Enter Area Code"
              maxLength={3}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
        <Form.Item
            label="Phone Number:"
            name={["patient", "name_address", "telephony", "phone_number"]}
            help="Phone Number is Required!"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              controls={false}
              name="patient/name-address/telephony/phone-number"
              placeholder="Enter Phone Number"
              maxLength={7}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient Relationship to Insured"
            name={["patient", "relationship_to_insured"]}
            help="Patient Relationship to Insured is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup
              name="patient/relationship-to-insured"
              options={relationOptions}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Employment:"
            name={["patient", "employment_flag"]}
            help="Condition Related to Employment is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup
              name="patient/employment-flag"
              options={booleanOptions}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Auto Accident:"
            name={["patient", "auto_accident_flag"]}
            help="Condition Related to Auto Accident is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup
              name="patient/auto-accident-flag"
              options={booleanOptions}
            />
          </Form.Item>
        </Col>
        {claimData?.patient?.auto_accident_flag === BooleanEnum.yes && (
          <Col span={8}>
            <Form.Item
              label="State Where Auto Accident Occurred:"
              // hidden={claimData?.patient?.auto_accident_state !== BooleanEnum.yes}
              name={["patient", "auto_accident_state"]}
              help="Where Auto Accident Occurred is Required!"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="State"
                optionFilterProp="label"
                id="patient/auto-accident-state"
                showSearch
                options={states}
              />
            </Form.Item>
          </Col>
        )}
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Other Accident:"
            name={["patient", "other_accident_flag"]}
            help="Condition Related to Other Accident is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup
              name="patient/other-accident-flag"
              options={booleanOptions}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's or Authorized Person's Signature (Name):"
            name={["patient", "signature", "signed_name"]}
          >
            <Input
              name="patient/signature/signed-name"
              placeholder="Enter Patient Signature"
              maxLength={30}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's or Authorized Person's Signature (Date):"
            name={["patient", "signature", "signed_date"]}
          >
            <DatePicker
              className="w-full"
              name="patient/signature/signed-date"
              placeholder={dateFormate}
              format={dateFormate}
            />
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
