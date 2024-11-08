import React, { useState } from 'react';
import { Form, Input, InputProps, Modal } from 'antd';

interface CustomeNameProps extends InputProps {
    title: string;
}

interface Name {
    first: string;
    last: string;
    middle: string;
}


const CustomeName: React.FC<CustomeNameProps> = ({onChange, title, name, ...props}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState("");

  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalOpen(false);
    const data: Name = form.getFieldsValue();
    let name;
    name = data.first;
    if(data.last) name = name + ", " + data.last;
    if(data.middle) name = name + ", " + data.middle;
    setData(name);
    form.resetFields();

    if (onChange) onChange(name as any);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSelect = (e: any) =>{
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
        <Input 
            placeholder='Doe Jr, John, J'
            value={data}
            onClick={onSelect}
            onChange={onSelect}
            name={name}
            {...props} />
        <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
                layout='vertical'
                form={form}
            >
                <Form.Item label="First" name="first" >
                    <Input />
                </Form.Item>
                <Form.Item label="Last" name="last" >
                    <Input />
                </Form.Item>
                <Form.Item label="Middle" name="middle" >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </>
  );
};

export default CustomeName;