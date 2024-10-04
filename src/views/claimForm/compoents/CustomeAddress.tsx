import React, { useState } from 'react';
import { Form, Input, InputProps } from 'antd';

interface CustomeAddressProps extends InputProps {
    key_name: string;
}

interface Name {
    first: string;
    last: string;
    middle: string;
}


const CustomeAddress: React.FC<CustomeAddressProps> = ({onChange,key_name, ...props}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any>();

  const [form] = Form.useForm();

  const onSelect = () =>{
    setIsModalOpen(true);
    console.log("### Selectedddd ");
  }

  return (
    <>
        <Form.Item  name={[key_name, "street"]}>
            <Input />
        </Form.Item>
        <Form.Item label="CITY" name={[key_name, "city"]}>
            <Input />
        </Form.Item>
        <Form.Item label="STATE" name={[key_name, "state"]}>
            <Input />
        </Form.Item>
        <Form.Item label="ZIP CODE" name={[key_name, "zip_code"]}>
            <Input />
        </Form.Item>
        <Form.Item label="Telephone" name={[key_name, "telephone"]}>
            <Input />
        </Form.Item>
    </>
  );
};

export default CustomeAddress;