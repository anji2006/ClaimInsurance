import React, { useState } from 'react';
import { Button, Form, Input, InputProps, Modal } from 'antd';

interface CustomeNameProps extends InputProps {
    title: string;
    
}

interface Name {
    first: string;
    last: string;
    middle: string;
}


const CustomeName: React.FC<CustomeNameProps> = ({onChange, title, ...props}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any>();

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

    {onChange && onChange( name);}
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSelect = () =>{
    setIsModalOpen(true);
  }

  return (
    <>
        <Input 
            placeholder='Doe Jr, John, J'
            value={data}
            onClick={onSelect}
            onChange={onSelect}
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