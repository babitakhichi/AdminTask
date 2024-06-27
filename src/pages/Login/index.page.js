import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { login, selectUserData } from '../../redux/AuthSlice/index.slice';


function Login() {
  const dispatch = useDispatch();
  const profile = useSelector(selectUserData);
  const navigate = useNavigate();
  console.log("profile,", profile);

  const onFinish = (values) => {
    console.log('values',values)
    if(values.email==='admin@gmail.com' && values.password==='admin'){
      dispatch(login({ name: "babita", email: "babita@mailinator.com" }));
      navigate("/dashboard");
    }
    else{
      alert('Email not found')
    }
  };
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
      initialValues={{
        
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
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
        <Input />
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
  );
}

export default Login;
