import React, { useEffect, useState } from "react";

import { Form, Input, Image, Card } from "antd";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const {
    user: {
      accessToken,
      dashboard: { profile },
    },
  } = useSelector((state) => state.user);

  useEffect(() => {
    form.setFieldsValue({
      name: profile?.name,
      last_name: profile?.last_name,
      phone: profile?.phone,
      email: profile?.email,
      
    });
  }, [profile]);
  return (
    <div className="form-layout">
      <div className="form-design-view">
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off"
        >
          <Card
            title="View Profile"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Form.Item
              label="Fist Name"
              name="name"
              {...formItemLayout}
              //   rules={[
              //     {
              //       required: false,
              //       message: "Please input your first name!",
              //     },
              //   ]}
            >
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              {...formItemLayout}
              //   rules={[
              //     {
              //       required: false,
              //       message: "Please input your last name!",
              //     },
              //   ]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              {...formItemLayout}
              //   rules={[
              //     {
              //       required: false,
              //       message: "Please input your phone!",
              //     },
              //   ]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              {...formItemLayout}
              //   rules={[
              //     {
              //       required: false,
              //       message: "Please input your email!",
              //     },
              //   ]}
            >
              <Input disabled/>
            </Form.Item>
            
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default Index;
