import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
} from "antd";
import { booleanOptions, dateFormate } from "../constants";
import RadioGroup from "./RadioGroup";
import SubTitle from "./SubTitle";

interface IProps {
  next: Function;
  prev: Function;
  setData: Function;
}

export default function AdditionalClaimInfo({ next, setData, prev }: IProps) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    setData(values);
    next();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <SubTitle title="Additional Claim Information" />
      <Row gutter={[30, 0]}>
        <Col span={8}>
          <Form.Item
            label="WCB Authorization Number:"
            name="wcb_auth_number"
            rules={[
              { required: true, message: "Enter WCB Authorization Number" },
            ]}
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="WCB Rating Code:"
            name="wcb_rating_code"
            rules={[{ required: true, message: "WCB Rating Code" }]}
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Report Type Code:"
            name="report_type_code"
            rules={[{ required: true, message: "WCB Rating Code" }]}
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Transmission Type Code:"
            name="transmission_type_code"
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Attachment Control ID:"
            name="attachment_control_id"
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Carrier Received Date:"
            name="carrier_received_date"
          >
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Unable to Work Date:"
            name={["unable_to_work_date"]}
          >
            <DatePicker.RangePicker
              style={{ width: "100%" }}
              placeholder={[dateFormate, dateFormate]}
              format={dateFormate}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Hospitalization Date:"
            name={["hospitalization_date"]}
          >
            <DatePicker.RangePicker
              style={{ width: "100%" }}
              placeholder={[dateFormate, dateFormate]}
              format={dateFormate}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Outside Lab:"
            name={["is_outside_lab"]}
            style={{ marginBottom: 0 }}
          >
            <RadioGroup options={booleanOptions} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Outside Lab Charges:"
            name={["outside_lab_charges"]}
          >
            <InputNumber style={{ width: "100%" }} controls={false} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Resubmission Code:" name="resubmission_code">
            <Input maxLength={29} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Original Reference Number:"
            name="original_ref_number"
          >
            <Input maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Prior Authorization Number:"
            name="prior_auth_number"
          >
            <Input maxLength={24} />
          </Form.Item>
        </Col>
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
