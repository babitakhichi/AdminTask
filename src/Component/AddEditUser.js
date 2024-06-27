import { Button, Form, Input } from 'antd';
import React from 'react'

function AddEditUser({userDeatils,onSubmit}) {
    const [form] = Form.useForm();
  console.log('in use',userDeatils)
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
  
    onFinish={(val)=>{ form.resetFields();onSubmit(val)}}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="First Name"
      name="firstName"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
       
      ]}
    >
      <Input defaultValue={userDeatils?.firstName} />
    </Form.Item>

    <Form.Item
      label="Last Name"
      name="lastName"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
       
      ]}
    >
      <Input  defaultValue={userDeatils?.lastName} />
    </Form.Item>
    <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          { type: 'email' }
        ]}
      >
        <Input defaultValue={userDeatils?.email} />
      </Form.Item>

  

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddEditUser