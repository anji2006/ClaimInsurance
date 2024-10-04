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

interface IProps {
  next: Function;
  prev: Function;
  setData: Function;
}

export default function Diagnosis({ next, prev, setData }: IProps) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {

    const diagnosisList = values?.items?.map(record => ({
        ...record,
        date_of_service : [dayjs(record["date_of_service"][0]).format(dateFormate), dayjs(record["date_of_service"][1]).format(dateFormate)],
    }) )
    values = {
      ...values,
      items : diagnosisList,
    }
    console.log("Diagnosys", values);
    setData(values);

    //values["signature_date"] = dayjs(values?.signature_date).format(dateFormate);
 
    // next();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <SubTitle title="Diagnosis or Nature of Illness or Injury" />
      <Row gutter={[30, 0]}>
        <Col span={4}>
          <Form.Item
            label="ICD Indicator:"
            name={["icd_indicator"]}
            rules={[{required: true, message: "Select ICD Indicator"}]}
          >
            <Select
              placeholder="ICD indicator"
              optionFilterProp="label"
              showSearch
              options={icdIndicatorOptions}
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code A:"
            name={["diagnosis_codes", "code_1"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code B:"
            name={["diagnosis_codes", "code_2"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code C:"
            name={["diagnosis_codes", "code_3"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code D:"
            name={["diagnosis_codes", "code_4"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code E:"
            name={["diagnosis_codes", "code_5"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code F:"
            name={["diagnosis_codes", "code_6"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code G:"
            name={["diagnosis_codes", "code_7"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code H:"
            name={["diagnosis_codes", "code_8"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code I:"
            name={["diagnosis_codes", "code_9"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code J:"
            name={["diagnosis_codes", "code_10"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code H:"
            name={["diagnosis_codes", "code_11"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Diagnosis Code L:"
            name={["diagnosis_codes", "code_12"]}
          >
            <Input maxLength={7} />
          </Form.Item>
        </Col>
      </Row>
      <SubTitle title="Supplemental Information" />
      <Form.List initialValue={[{}]} name="items">
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
                <Row gutter={[30, 0]}>
                  <Col span={8}>
                    <Form.Item
                      label="Date(s) of Service:"
                      name={[field.name, "date_of_service"]}
                      rules={[{required: true, message: "select Date of Service"}]}
                    >
                      <DatePicker.RangePicker
                        placeholder={[dateFormate, dateFormate]}
                        format={dateFormate}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Place of Service:"
                      name={[field.name, "place_of_service",]}
                      rules={[{required: true, message: "Enter Place of service"}]}
                    >
                      <Input placeholder="Place of Service" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="EMG (Emergency Flag):"
                      name={[field.name, "emergency"]}
                      rules={[{required: true, message: "Select one of the Options"}]}
                    >
                      <RadioGroup options={booleanOptions} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="CPT/HCPCS Code:"
                      name={[field.name, "cpt_code"]}
                      rules={[{required: true, message: "Enter CPT/HCPCS Code"}]}
                    >
                      <Input placeholder="CPT/HCPCS Code" maxLength={6} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Modifier:">
                      <Flex>
                        <Form.Item
                          style={{ marginBottom: 0 }}
                          name={[field.name, "modifier_1"]}
                        >
                          <Input maxLength={2} />
                        </Form.Item>
                        <Form.Item
                          style={{ marginBottom: 0 }}
                          name={[field.name, "modifier_2"]}
                        >
                          <Input maxLength={2} />
                        </Form.Item>
                        <Form.Item
                          style={{ marginBottom: 0 }}
                          name={[field.name, "modifier_3"]}
                        >
                          <Input maxLength={2} />
                        </Form.Item>
                        <Form.Item
                          style={{ marginBottom: 0 }}
                          name={[field.name, "modifier_4"]}
                        >
                          <Input maxLength={2} />
                        </Form.Item>
                      </Flex>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Diagnosis Code Pointer:"
                      name={[field.name, "code_pointer"]}
                      rules={[{required: true, message: "Enter Diagnosis Code Pointer"}]}
                    >
                      <Input
                        placeholder="Diagnosis Code Pointer"
                        maxLength={4}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Charges($):" name={[field.name, "charges"]} 
                      rules={[{required: true, message: "Enter Charges"}]}>
                      <InputNumber style={{width: "100%" }}  controls={false} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Days or Units:"
                      name={[field.name, "days"]}
                      rules={[{required: true, message: "Enter Days or Units"}]}
                    >
                      <InputNumber style={{width: "100%" }}  controls={false} maxLength={3} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="EPSDT/Family Plan (Shaded):"
                      name={[field.name, "shaded_family_plan"]}
                    >
                      <Input placeholder="EPSDT/Family Plan" maxLength={2} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="EPSDT/Family Plan (Unshaded):"
                      name={[field.name, "unshaded_family_plan"]}
                    >
                      <Input placeholder="EPSDT/Family Plan" maxLength={1} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="ID Qualifier:"
                      name={[field.name, "id_qualifier"]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Rendering Provider ID (Shaded):"
                      name={[field.name, "shaded_provider_id"]}
                    >
                      <Input maxLength={11} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Rendering Provider NPI (Unshaded):"
                      name={[field.name, "unshaded_provider_id"]}
                    >
                      <InputNumber style={{width: "100%" }}  controls={false} maxLength={10} />
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
