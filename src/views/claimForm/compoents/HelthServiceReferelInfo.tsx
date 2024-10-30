import { Button, Col, Flex, Form, Input, InputNumber, Row, Select } from "antd";
import { states } from "../constants";
import Telephony from "./Telephony";
import SubTitle from "./SubTitle";
import { useClaimContext } from "../../../store/claimContext";
import { MouseEventHandler } from "react";
import { CustomObject } from "../../../utils/types";
import { combineTwoObjects } from "../../../utils/functions";

interface IProps {
  next: () => void;
  prev: MouseEventHandler<HTMLElement>;
}

export default function HelthServiceReferelInfo({ next, prev }: IProps) {
  const [form] = Form.useForm();
  const {claimData, setClaimData} = useClaimContext();

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
      title="Insured Information"
    >
      <SubTitle title="Health Care Provider Information" />
      <Row gutter={[30, 10]}>
        <Col span={8}>
          <Form.Item // TO DO
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
            name={["physician_or_supplier", "billing_provider", "name"]}
            help="Name is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/billing-provider/name" maxLength={60} placeholder="Enter Provider Name" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider Address"
            name={["physician_or_supplier", "billing_provider", "address"]}
            help="Address is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/billing-provider/address" placeholder="Enter Provider Address" maxLength={60} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider City"
            name={["physician_or_supplier", "billing_provider", "city"]}
            help="City is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/billing-provider/city" placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider State"
            name={["physician_or_supplier", "billing_provider", "state"]}
            help="State is Required!"
            rules={[{ required: true }]}
          >
            <Select
              id="physician-or-supplier/billing-provider/state"
              placeholder="Billing Provider State"
              optionFilterProp="label"
              showSearch
              options={states}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="ZIP Code"
            name={["physician_or_supplier", "billing_provider", "zip"]}
            help="ZIP Code is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/billing-provider/zip" placeholder="ZIP Code" maxLength={12} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider NPI Number:"
            name={["physician_or_supplier", "billing_provider", "npi_number"]}
            help="NPI Number is Required!"
            rules={[{ required: true }]}
          >
            <InputNumber name="physician-or-supplier/billing-provider/npi-number" className="w-full"  controls={false} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Billing Provider Other ID Number:"
            name={["physician_or_supplier", "billing_provider", "other_id_number", "id_number"]}
          >
            <Input name="physician-or-supplier/billing-provider/other-id-number/id-number" maxLength={17} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Billing Provider Other ID Qualifier:"
            name={["physician_or_supplier", "billing_provider", "other_id_number", "qualifier"]}
          >
            <Input name="physician-or-supplier/billing-provider/other-id-number/qualifier" maxLength={17} />
          </Form.Item>
        </Col>
      </Row>


  

      <SubTitle title="Referring Provider Information" />
      <Row gutter={[30, 10]}>
        <Col span={8}>
          <Form.Item
            label="Referring Provider Qualifier:"
            name={["physician_or_supplier", "referring_provider_or_other_source", "qualifier"]}
            help="Qualifier is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/referring-provider-or-other-source/qualifier" maxLength={2} />
          </Form.Item>
        </Col>
        {['DQ', 'DN', 'DK'].includes(claimData?.physician_or_supplier?.referring_provider_or_other_source?.qualifier) && (
          <>
            <Col span={8}>
              <Form.Item
                label="Referring Provider Name:"
                name={["physician_or_supplier", "referring_provider_or_other_source", "name"]}
                help="Name is Required!"
                rules={[{ required: true }]}
              >
                <Input name="physician-or-supplier/referring-provider-or-other-source/name" maxLength={24}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Referring Provider NPI Number:"
                name={["physician_or_supplier", "referring_provider_or_other_source", "npi_number"]}
                help="NPI Number is Required!"
                rules={[{ required: true }]}
              >
                <InputNumber name="physician-or-supplier/referring-provider-or-other-source/npi-number" className="w-full" controls={false} maxLength={10} />
              </Form.Item>
            </Col>
          </>
        )}
        <Col span={8}>
          <Form.Item
            label="Referring Provider Other ID Qualifier:"
            name={["physician_or_supplier", "referring_provider_or_other_source", "other_id_number", "qualifier"]}
          >
            <Input name="physician-or-supplier/referring-provider-or-other-source/other-id-number/qualifier" maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Referring Provider Other ID Number:"
            name={["physician_or_supplier", "referring_provider_or_other_source", "other_id_number", "id_number"]}
          >
            <Input name="physician-or-supplier/referring-provider-or-other-source/other-id-number/id-number" maxLength={17} />
          </Form.Item>
        </Col>
      </Row>

      <SubTitle title="Service Facility Information" />
      <Row gutter={[30, 10]}>
        <Col span={8}>
          <Form.Item
            label="Service Facility Name:"
            name={["physician_or_supplier", "service_facility", "name"]}
            help="Name is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/service-facility/name" maxLength={60} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility Address:"
            name={["physician_or_supplier", "service_facility", "address"]}
            help="Address is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/service-facility/address" placeholder="Address" maxLength={60} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility City:"
            name={["physician_or_supplier", "service_facility", "city"]}
            help="City is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/service-facility/city" placeholder="City" maxLength={24} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility State:"
            name={["physician_or_supplier", "service_facility", "state"]}
            help="State is Required!"
            rules={[{ required: true }]}
          >
            <Select
              id="physician-or-supplier/service-facility/state"
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
            name={["physician_or_supplier", "service_facility", "zip"]}
            help="ZIP Code is Required!"
            rules={[{ required: true }]}
          >
            <Input name="physician-or-supplier/service-facility/zip" placeholder="ZIP Code" maxLength={12} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility NPI Number:"
            name={["physician_or_supplier", "service_facility", "npi_number"]}
            help="NPI Number is Required!"
            rules={[{ required: true }]}
          >
            <InputNumber name="physician-or-supplier/service-facility/npi-number" className="w-full"  controls={false} maxLength={10} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility Other ID Qualifier:"
            name={["physician_or_supplier", "service_facility", "qualifier"]}
          >
            <Input name="physician-or-supplier/service-facility/other-id-number/qualifier" maxLength={14} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Service Facility Other ID Number:"
            name={["physician_or_supplier", "service_facility", "other_id_number"]}
          >
            <Input name="physician-or-supplier/service-facility/other-id-number" maxLength={14} />
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
