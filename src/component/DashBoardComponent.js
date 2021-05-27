import React,{ useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Card,Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const layout = {
    labelCol: {
      span: 2,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const dashboard=()=>{
     const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onChange = e => {
    console.log('Change:', e.target.value);
  };
  const normFile = (e) => {
    console.log('Upload event:', e);
};
    return (
      <Card className="">
        <h1>Welcome to She can code BlogPost</h1>
        <p>Please share with us your blogpost.
          NB: Your content dont have to exit 1000 characters
        </p>
        <Form
        {...layout}
        name="basic"
        className="dashboard-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="Title"
        className="dashboard-form-1"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item 
      label="Content"
      name={['user', 'content']}
      rules={[
        {
          required: true,
          message: 'Please input your content!',
        },
      ]}
      >
      <TextArea showCount maxLength={1000} onChange={onChange} />

      </Form.Item>
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
      <Upload name="logo" action="/upload.do" listType="picture">
      <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
      </Form.Item>

      <Form.Item {...tailLayout}><br/>
        <Button type="primary" htmlType="submit" className="dashboard-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
   
     )
}
export default dashboard;