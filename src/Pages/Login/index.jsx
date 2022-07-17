import React, { useEffect } from "react";
import { Button, Form, Input, Spin } from "antd";
import Spinner from "../../Components/Spinner";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../Actions/userAction";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, error, user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const onSubmit = (fieldsValue) => {
    dispatch(loginUser(fieldsValue));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(user.message);
      navigate("/");
    } else if (error) {
      toast.error(error.message);
    }
  }, [loading, isAuthenticated, error]);

  if (loading) return <Spinner />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onSubmit}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
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
    </div>
  );
};

export default Login;
