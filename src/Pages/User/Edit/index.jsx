import React, { useEffect } from "react";

import { Select, Form, Input, Button, Card } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  updateUser,
  getUserByID,
  clearErrors,
  clearSuccess,
} from "../../../Actions/userAction";
import Spinner from "../../../Components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import "../style.css";

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

const { Option } = Select;

const Edit = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [form] = Form.useForm();

  const {
    user: { accessToken },
    loading,
    error,
    success,
    userInfo,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "user_update_success") {
      toast.success("User Updated Successfully");
      dispatch(clearSuccess());
      navigate("/user/list");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const onSubmit = (fieldsValue) => {
    dispatch(updateUser(accessToken, id, fieldsValue));
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
          wrapperCol={{
            span: 16,
          }}
          style={{
            width: "80%",
          }}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Card
            title="Edit User"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Form.Item
              label="Title"
              name="title"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your title!",
                },
              ]}
            >
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
            <Form.Item
              label="Email"
              name="email"
              {...formItemLayout}
              rules={[
                {
                  type: "email",
                  message: "Please input your valid email!",
                },
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Phone No"
              name="phone"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your phone no!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your media type!",
                },
              ]}
            >
              <Select>
                <Option value="SuperAdmin">Super Admin</Option>
                <Option value="Admin">Admin</Option>
                <Option value="Manager">Manager</Option>
              </Select>
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

export default Edit;
