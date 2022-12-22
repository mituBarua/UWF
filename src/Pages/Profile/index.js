import React, { useEffect, useState } from "react";

import { Form, Input, InputNumber, Image, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  updateUser,
  getUserByID,
  clearErrors,
  clearSuccess,
} from "../../Actions/userAction";
import { toast } from "react-toastify";

import "./style.css";
import Spinner from "../../Components/Spinner";

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
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const {
    user: {
      accessToken,
      dashboard: { profile },
    },
  } = useSelector((state) => state.user);

  const { userInfo, success, loading, error } = useSelector(
    (state) => state.newUser
  );

  useEffect(() => {
    dispatch(getUserByID(accessToken, profile.id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      title: userInfo?.title,
      first_name: userInfo?.name,
      last_name: userInfo?.last_name,
      phone: userInfo?.phone.slice(3, 11),
      email: userInfo?.email,
      role: userInfo?.role,
    });
  }, [userInfo]);

  useEffect(() => {
    if (success && success.type == "user_update_success") {
      toast.success("Profile Updated Successfully");
      dispatch(clearSuccess());
      window.location.reload();
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const onSubmit = (fieldsValue) => {
    fieldsValue.phone = "+44" + fieldsValue.phone;
    dispatch(updateUser(accessToken, profile.id, fieldsValue));
  };

  if (loading) return <Spinner />;
  return (
    <div className="form-layout">
      <div className="form-design-view">
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          onFinish={onSubmit}
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
            <Form.Item name="title" hidden>
              <Input />
            </Form.Item>
            <Form.Item name="role" hidden>
              <Input />
            </Form.Item>
            <Form.Item
              label="First Name"
              name="first_name"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last_name"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              label="Phone"
              name="phone"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input />
            </Form.Item> */}
            <Form.Item
              label="Phone"
              name="phone"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
                {
                  validator: (_, value) => {
                    const re = /^[0-9\b]+$/;
                    if (
                      value.toString().length == 8 &&
                      re.test(value.toString())
                    ) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject("Please input your valid phone!");
                    }
                  },
                },
              ]}
            >
              <InputNumber
                addonBefore="+44"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item label="Email" name="email" {...formItemLayout}>
              <Input disabled />
            </Form.Item>
            <Form.Item {...formItemLayoutWithOutLabel}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default Index;
