import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react'

function AddEditUser({userDeatils,onSubmit}) {
    const [form] = Form.useForm();

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const defaultValues={
        firstName:userDeatils.firstName||'',
        lastName:userDeatils.lastName||'',
        email:userDeatils.email||''
      }
      useEffect(() => {
        form.setFieldsValue(defaultValues)
       }, [form, defaultValues])

  return (
    <Form
    form={form}
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
    initialValues={defaultValues}
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
