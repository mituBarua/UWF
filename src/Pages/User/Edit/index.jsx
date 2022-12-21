import React, { useEffect } from "react";

import { Select, Form, Input, InputNumber, Button, Card } from "antd";

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
  } = useSelector((state) => state.user);

  const { userInfo, success, loading, error } = useSelector(
    (state) => state.newUser
  );

  useEffect(() => {
    dispatch(getUserByID(accessToken, id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      title: userInfo?.title,
      first_name: userInfo?.name,
      last_name: userInfo?.last_name,
      email: userInfo?.email,
      phone: userInfo?.phone.slice(3, 11),
      role: userInfo?.role,
    });
  }, [userInfo]);

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
    fieldsValue.phone = "+44" + fieldsValue.phone;
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
            {/* <Form.Item
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
