import React, { useEffect, useState } from "react";

import { Form, Input } from "antd";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMessageByID } from "../../../Actions/messageAction";
// import '../Create/style.css';

const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(getMessageByID(accessToken, id));
  }, []);

  useEffect(() => {
    console.log(message);
    form.setFieldsValue({
      first_name: message?.first_name,
      last_name: message?.last_name,
      email: message?.email,
      message: message?.message,
      created_at: message?.created_at.slice(0, 10),
    });
  }, [message]);
  return (
    <div className="formLayout">
      <div className="form-designView">
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Fist Name"
            name="first_name"
            rules={[
              {
                required: false,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              {
                required: false,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: false,
                message: "Please input your email!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: false,
                message: "Please input your additional note!",
              },
            ]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Additional Note"
              maxLength={250}
              disabled
            />
          </Form.Item>
          <Form.Item
            label="Created At"
            name="created_at"
            rules={[
              {
                required: false,
                message: "Please input your email!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default View;
