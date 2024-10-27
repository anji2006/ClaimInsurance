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
import Telephony from "./Telephony";
import SubTitle from "./SubTitle";
import dayjs from "dayjs";
import { useClaimContext } from "../../../store/claimContext";

interface IProps {
  next: Function;
  prev: Function;
}

export default function PatientInformation({ next, prev }: IProps) {
  const [form] = Form.useForm();
  const {claimData, setClaimData} = useClaimContext();

  const onFinish = (values: any) => {
    
    values["birth_date"] = dayjs(values?.birth_date).format(dateFormate);
    values["signature_date"] = dayjs(values?.signature_date).format(dateFormate);

    setClaimData(values);
    next();
  };

  const onValuesChange = (changedValues: any[], values: any[]) => {
    console.log('+++++++++++++++++++onValuesChange', changedValues, values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      validateTrigger={['onChange', 'onBlur']}
      layout="vertical"
      title="Patient Information"
    >
      <SubTitle title="Patient Information" />
      <Row gutter={[30, 10]}>
        <Col span={8}>
          <Form.Item
            label="Patient's Account No:"
            name={['patient', 'account_number']}
            help='Account Number is Required!'
            rules={[{ required: true }]}
          >
            <InputNumber className="w-full" controls={false} name="physician-or-supplier/patients-account-no" placeholder="Enter Patitent Account Number" maxLength={14} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient’s Name:" // TO DO
            name={['patient', 'name']}
            help="Patient's Name is Required!"
            rules={[{ required: true }]}
          >
            <CustomeName name="patient/last-name-first-name-middle-initial" title="Patient’s Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient’s Birth Date, Sex :"
          >
            <Row gutter={[10, 0]}>
              <Col>
                <Form.Item
                  name={['patient', 'date_of_birth']}
                  style={{ marginBottom: 0 }}
                  help='Date of Birth is Required!'
                  rules={[{required: true}]} // TO DO
                >
                  <DatePicker name="patient/date-of-birth" placeholder={dateFormate} format={dateFormate} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name={["patient", "gender"]}
                  style={{ marginBottom: 0 }}
                  rules={[{required: true, message: "Please Select this field"}]}
                >
                  <RadioGroup name="patient/gender" options={sexOptions} />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Address(Street) :"
            name={["patient","name_address", "address"]}
            help="Address(Street) is Required!"
            rules={[{ required: true }]}
          >
            <Input name="patient/name-address/address" placeholder="Enter Address(Street)" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="City"
            name={["patient","name_address", "city"]}
            help="City is Required!"
            rules={[{ required: true }]}
          >
            <Input name="patient/name-address/city" placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="State"
            name={["patient","name_address", "state"]}
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
            name={["patient","name_address", "zip"]}
            help="ZIP Code is Required!"
            rules={[{ required: true }]}
          >
            <Input name="patient/name-address/zip" placeholder="ZIP Code" maxLength={12} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item // TO DO
            label="Telephony (Including Area Code)"
            name={["patient","name_address", "telephony"]}
          >
            <Telephony />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient Relationship to Insured"
            name={["patient", "relationship_to_insured"]}
            help="Patient Relationship to Insured is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup name="patient/relationship-to-insured" options={relationOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Employment:"
            name={["patient", "employment_flag"]}
            help="Condition Related to Employment is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup name="patient/employment-flag" options={booleanOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Auto Accident:"
            name={["patient", "auto_accident_flag"]}
            help="Condition Related to Auto Accident is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup name="patient/auto-accident-flag" options={booleanOptions} />
          </Form.Item>
        </Col>
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
        <Col span={8}>
          <Form.Item
            label="Is Patient's Condition Related to Other Accident:"
            name={["patient", "other_accident_flag"]}
            help="Condition Related to Other Accident is Required!"
            rules={[{ required: true }]}
          >
            <RadioGroup name="patient/other-accident-flag" options={booleanOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's or Authorized Person's Signature (Name):"
            name={["patient", "signature", "signed_name"]}
          >
            <Input name="patient/signature/signed-name" placeholder="Enter Patient Signature" maxLength={30} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Patient's or Authorized Person's Signature (Date):"
            name={["patient", "signature", "signed_date"]}
          >
            <DatePicker name="patient/signature/signed-date" placeholder={dateFormate} format={dateFormate} />
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