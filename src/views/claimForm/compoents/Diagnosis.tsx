import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { booleanOptions, dateFormate, icdIndicatorOptions } from "../constants";
import RadioGroup from "./RadioGroup";
import SubTitle from "./SubTitle";
import dayjs from "dayjs";
import { useClaimContext } from "../../../store/claimContext";
import { CustomObject } from "../../../utils/types";
import { combineTwoObjects, downloadObjectAsJson } from "../../../utils/functions";

interface IProps {
  prev: () => void;
}

export default function Diagnosis({ prev }: IProps) {
  const [form] = Form.useForm();
  const {claimData, setClaimData} = useClaimContext();

  const onFinish = (values: CustomObject) => {
    const updatedData = combineTwoObjects(claimData, values);
    setClaimData(updatedData);
    downloadObjectAsJson(updatedData, "claim-data");
  };

  const onValuesChange = (_: CustomObject, values: CustomObject) => {
    const updatedData = combineTwoObjects(claimData, values);
    setClaimData(updatedData);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      initialValues={claimData}
      onValuesChange={onValuesChange}
      validateTrigger={['onChange', 'onBlur']}
      layout="vertical"
    >
      <SubTitle title="Diagnosis or Nature of Illness or Injury" />
      <Row gutter={[30, 10]}>
        <Col span={8}>
          <Form.Item
            label="ICD Indicator:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "ICD_indicator"]}
            help="ICD Indicator is Required!"
            rules={[{required: true }]}
          >
            <Select
              id="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/ICD-indicator"
              placeholder="ICD indicator"
              options={icdIndicatorOptions}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code A:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_a"]}
            help="Code A is Required!"
            rules={[{required: true }]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-a" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code B:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_b"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-b" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code C:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_c"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-c" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code D:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_d"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-d" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code E:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_e"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-e" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code F:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_f"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-f" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code G:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_g"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-g" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code H:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_h"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-h" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code I:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_i"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-i" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code J:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_j"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-j" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code K:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_k"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-k" maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Diagnosis Code L:"
            name={["physician_or_supplier", "diagnosis_or_nature_of_illness_or_injury", "diagnosis_code", "code_l"]}
          >
            <Input name="physician-or-supplier/diagnosis-or-nature-of-illness-or-injury/diagnosis-code/code-l" maxLength={7} />
          </Form.Item>
        </Col>
      </Row>


    
      <SubTitle title="Supplemental Information" />
      <Form.List name="supplemental_information_items">
        {(fields, { add, remove }) => (
          <div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
            {fields.map((field) => (
              <Card
                size="small"
                title={`Service No: ${field.name + 1}`}
                key={field.key}
                extra={
                  <IoCloseOutline
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Row gutter={[30, 10]}>
                  <Col span={8}>
                    <Form.Item
                      label="Address(Street) :"
                      name={[field.name, "address"]}
                    >
                      <Input name="physician-or-supplier/supplemental-information" maxLength={60} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Date(s) of Service From:"
                      name={[field.name, "from_date"]}
                      help="From Date is Required!"
                      rules={[{ required: true }]}
                    >
                      <DatePicker className="w-full" name="physician-or-supplier/procedure-service-or-supply/from-date" placeholder={dateFormate} format={dateFormate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Date(s) of Service To:"
                      name={[field.name, "to_date"]}
                      help="To Date is Required!"
                      rules={[{ required: true }]}
                    >
                      <DatePicker className="w-full" name="physician-or-supplier/procedure-service-or-supply/to-date" placeholder={dateFormate} format={dateFormate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Place of Service:"
                      name={[field.name, "place_of_service"]}
                      help="Place is Required!"
                      rules={[{ required: true }]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/place-of-service" placeholder="Place of Service" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="EMG (Emergency Flag):"
                      name={[field.name, "emergency_flag"]}
                      help="EMG is Required!"
                      rules={[{ required: true }]}
                    >
                      <RadioGroup name="physician-or-supplier/procedure-service-or-supply/emergency-flag" options={booleanOptions} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="CPT/HCPCS Code:"
                      name={[field.name, "cpt_hcpcs_code"]}
                      help="CPT/HCPCS Code is Required!"
                      rules={[{ required: true }]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/cpt-hcpcs-code" placeholder="CPT/HCPCS Code" maxLength={6} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Modifier 1:"
                      name={[field.name, "modifier_a"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/modifier-a" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Modifier 2:"
                      name={[field.name, "modifier_b"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/modifier-b" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Modifier 3:"
                      name={[field.name, "modifier_c"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/modifier-c" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Modifier 4:"
                      name={[field.name, "modifier_d"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/modifier-d" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Diagnosis Code Pointer:"
                      name={[field.name, "diagnosis_pointer"]}
                      help="Diagnosis Code Pointer is Required!"
                      rules={[{ required: true }]}
                    >
                      <Input
                        name="physician-or-supplier/procedure-service-or-supply/diagnosis-pointer"
                        placeholder="Diagnosis Pointer"
                        maxLength={4}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Charges($):"
                      name={[field.name, "charges"]}
                      help="Charges is Required!"
                      rules={[{ required: true }]}
                    >
                      <InputNumber name="physician-or-supplier/procedure-service-or-supply/charges" className="w-full" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Days or Units:"
                      name={[field.name, "days_or_units"]}
                      help="Days or Units is Required!"
                      rules={[{ required: true }]}
                    >
                      <InputNumber name="physician-or-supplier/procedure-service-or-supply/days-or-units" className="w-full" maxLength={3} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="EPSDT/Family Plan (Shaded):"
                      name={[field.name, "EPSDT_or_family_plan_shaded"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/EPSDT-or-family-plan-shaded" placeholder="EPSDT/Family Plan" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="EPSDT/Family Plan (Unshaded):"
                      name={[field.name, "EPSDT_or_family_plan_unshaded"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/EPSDT-or-family-plan-unshaded" placeholder="EPSDT/Family Plan" maxLength={1} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="ID Qualifier:"
                      name={[field.name, "rendering_provider_id_number", "qualifier"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/rendering-provider-id-number/qualifier" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Rendering Provider ID (Shaded):"
                      name={[field.name, "rendering_provider_id_number", "id_number"]}
                    >
                      <Input name="physician-or-supplier/procedure-service-or-supply/rendering-provider-id-number/id-number" maxLength={11} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Rendering Provider NPI (Unshaded):"
                      name={[field.name, "rendering_provider_npi_number"]}
                    >
                      <InputNumber name="physician-or-supplier/procedure-service-or-supply/rendering-provider-npi-number" className="w-full" controls={false} maxLength={10} />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            ))}

            <Button type="dashed" style={{marginBottom: 10}} onClick={() => add()} block>
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>
      <Flex align="center" justify="flex-end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
}
