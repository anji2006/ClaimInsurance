import { Button, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import { FIELD_DISCRIPTION, healthCoverageOptions, states } from "../constants";
import CustomeName from "./CustomeName";
import RadioGroup from "./RadioGroup";
import Telephony from "./Telephony";
import SubTitle from "./SubTitle";

interface IProps {
  next: Function;
  prev: Function;
  setData: Function;
}

export default function HelthServiceReferelInfo({ next,prev, setData }: IProps) {
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
      <SubTitle title="Health Care Provider Information" />
      <Row gutter={[30, 0]}>
        <Col span={8}>
          <Form.Item
            label="Billing Provider Telephony (Including Area Code)"
            name={["billing", "telephony"]}
            rules={[{ required: true , message: "Enter Telephony number"}]}
          >
            <Telephony />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider Name:"
            name={["billing", "billing_provider_name"]}
            rules={[{ required: true , message: "Enter Billing Provider name"}]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider Address"
            name={["billing", "address"]}
            rules={[{ required: true, message: "Enter Billing Provider Address" }]}
          >
            <Input placeholder="Address" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider City"
            name={["billing", "city"]}
            rules={[{ required: true , message: "Enter Billling Provider City"}]}
          >
            <Input placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider State"
            name={["billing", "state"]}
            rules={[{ required: true , message: "Select Billing Provider State"}]}
          >
            <Select
              placeholder="Billing Provider State"
              optionFilterProp="label"
              showSearch
              options={states}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider ZIP Code"
            name={["billing", "zip_code"]}
            rules={[{ required: true , message: "Enter Billing Provider ZIP code"}]}
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
            label="Billing Provider NPI Number:"
            name={["billing", "npi_number"]}
            rules={[{ required: true, message: "Enter 10 Digit NPI number" }]}
          >
            <InputNumber style={{width: "100%" }}  controls={false} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Billing Provider Other ID Number:"
            name={["billing", "other_id_no"]}
          >
            <Input maxLength={17} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider Other ID Qualifier:"
            name={["billing", "other_id_qualifier"]}
          >
            <Input maxLength={17} />
          </Form.Item>
        </Col>
      </Row>

      <SubTitle title="Referring Provider Information" />
      <Row gutter={[30, 0]}>
        <Col span={8}>
          <Form.Item
            label="Referring Provider Qualifier:"
            name={["refer", "refferring_provider_qualifier"]}
            rules={[{ required: true , message: "Enter Referring Provider Qualifier"}]}
          >
            <Input maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Referring Provider Name:"
            name={["refer", "referring_provider_name"]}
            rules={[{ required: true, message: "Enter Referring Provider name" }]}
          >
            <Input maxLength={24}/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Referring Provider Other ID Qualifier:"
            name={["refer", "other_id_qualifier"]}
          >
            <Input maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Referring Provider Other ID Number:"
            name={["refer", "other_id_no"]}
          >
            <Input maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Referring Provider NPI Number:"
            name={["refer", "npi_number"]}
            rules={[{ required: true , message: "Enter 10-Digit NPI Number"}]}
          >
            <InputNumber style={{width: "100%" }}  controls={false} maxLength={10} />
          </Form.Item>
        </Col>
      </Row>

      <SubTitle title="Service Facility Information" />
      <Row gutter={[30, 0]}>
        <Col span={8}>
          <Form.Item
            label="Service Facility Name:"
            name={["service_facility", "facility_name"]}
            rules={[{ required: true }]}
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility Address:"
            name={["service_facility", "address"]}
            rules={[{ required: true, message: "Enter Service Facility Address(Street)" }]}
          >
            <Input placeholder="Address" maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility City:"
            name={["service_facility",  "city"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility State:"
            name={["service_facility", "state"]}
            rules={[{ required: true }]}
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
            label="Service Facility ZIP Code:"
            name={["service_facility", "zip_code"]}
            rules={[{ required: true , message: "Enter Service Facility ZIP Code"}]}
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
            label="Service Facility NPI Number:"
            name={["service_facility", "other_id_qualifier"]}
            rules={[{ required: true , message: "Enter 10-digit Service Facility NPI Number"}]}
          >
            <InputNumber style={{width: "100%" }}  controls={false} maxLength={28} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility Other ID Qualifier:"
            name={["service_facility", "other_id_qualifier"]}
          >
            <Input maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility Other ID Number:"
            name={["service_facility", "other_id_number"]}
          >
            <Input maxLength={24} />
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
