import {
  Button,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Row,
} from "antd";
import { BooleanEnum, booleanOptions, dateFormate } from "../constants";
import RadioGroup from "./RadioGroup";
import SubTitle from "./SubTitle";
import { useClaimContext } from "../../../store/claimContext";
import { MouseEventHandler } from "react";
import { CustomObject } from "../../../utils/types";
import { combineTwoObjects } from "../../../utils/functions";

interface IProps {
  next: () => void;
  prev: MouseEventHandler<HTMLElement>;
}

export default function AdditionalClaimInfo({ next, prev }: IProps) {
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
      validateTrigger={['onChange', 'onBlur']}
      layout="vertical"
    >
      <SubTitle className="claim-subtitle" title="Additional Claim Information" />
      <Row gutter={[30, 20]}>
        <Col span={8}>
          <Form.Item
            label="WCB Authorization Number:"
            name={["additional_claim_information", "wcb_authorization_number"]}
            help="Authorization Number is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="additional-claim-information/wcb-authorization-number"
              maxLength={15}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="WCB Rating Code:"
            name={["additional_claim_information", "wcb_rating_code"]}
            help="Rating Code is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="additional-claim-information/wcb-rating-code"
              maxLength={12}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Report Type Code:"
            name={["additional_claim_information", "report_type_code"]}
            help="Type Code is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="additional-claim-information/report-type-code"
              maxLength={5}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Transmission Type Code:"
            name={["additional_claim_information", "transmission_type_code"]}
            help="Type Code is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="additional-claim-information/transmission-type-code"
              maxLength={1}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Attachment Control ID:"
            name={["additional_claim_information", "attachment_control_id"]}
            help="Control ID is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="additional-claim-information/attachment-control-id"
              maxLength={15}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Carrier Received Date:"
            name={["additional_claim_information", "carrier_received_date"]}
            help="Received Date is Required!"
            rules={[{ required: true }]}
          >
            <Input
              name="additional-claim-information/carrier-received-date"
              maxLength={14}
            />
          </Form.Item>
        </Col>
        {claimData?.patient?.employment_flag === BooleanEnum.yes && (
          <Col span={8}>
            <Form.Item
              label="Unable to Work Dates(From - TO):"
              name={[
                "patient",
                "dates_patient_unable_to_work_in_current_operation",
              ]}
            >
              <DatePicker.RangePicker
                style={{ width: "100%" }}
                placeholder={[dateFormate, dateFormate]}
                format={dateFormate}
              />
            </Form.Item>
          </Col>
        )}
        <Col span={8}>
          <Form.Item
            label="Hospitalization Dates(From - TO):"
            name={[
              "physician_or_supplier",
              "hospitalization_dates_related_to_current_services",
            ]}
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
            name={["physician_or_supplier", "outside_lab_flag"]}
          >
            <RadioGroup name="physician-or-supplier/outside-lab-flag" options={booleanOptions} />
          </Form.Item>
        </Col>
        {claimData?.physician_or_supplier?.outside_lab_flag ===
          BooleanEnum.yes && (
          <Col span={8}>
            <Form.Item
              label="Outside Lab Charges:"
              name={["physician_or_supplier", "outside_lab_charges"]}
            >
              <Input
                name="physician-or-supplier/outside-lab-flag/charges"
                maxLength={8}
              />
            </Form.Item>
          </Col>
        )}
        <Col span={8}>
          <Form.Item
            label="Resubmission Code:"
            name={["physician_or_supplier", "resubmission", "code"]}
          >
            <Input
              name="physician-or-supplier/resubmission/code"
              maxLength={11}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Original Reference Number:"
            name={[
              "physician_or_supplier",
              "resubmission",
              "original_reference_number",
            ]}
          >
            <Input
              name="physician-or-supplier/resubmission/original-reference-number"
              maxLength={18}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Prior Authorization Number:"
            name={["physician_or_supplier", "prior_authorization_number"]}
          >
            <Input
              name="physician-or-supplier/prior-authorization-number"
              maxLength={29}
            />
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
