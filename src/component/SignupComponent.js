import React,{ useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import BlogApi from '../service/apiBlog';
import {useHistory} from'react-router-dom';

const { Option } = Select;


const Signup=() =>{
  const history=useHistory();
const onFinish = async(values) => {
  

const res = await BlogApi.RegisterAuth(values);
if(!res){
  return
}
if(res.status === 201){
  return history.push('/signin')
}



};




    return(
<div className="Signup-container" >
<Form className="Signup-content"   initialValues={{ remember: true }}
        onFinish={onFinish}>
<Form.Item
        label="Firstname"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input your Firstname!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
          
        <Input />
      </Form.Item>

 <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
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
        label="Gender"
        name="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          
        </Select>
        
      </Form.Item>

<Form.Item
        label="JobRole"
        name="JObRole"
        rules={[
          {
            required: true,
            message: 'Please input your jobrole!',
          },
        ]}
      >
        <Input />
      </Form.Item>
<Form.Item
        label="Address"
        name="Address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
     
    </Form>
    </div>




    )
}

export default Signup;