import React, { useEffect } from "react";
import { Button, Form, Input, Spin, InputNumber } from "antd";
import Spinner from "../../../Components/Spinner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser, clearErrors, clearSuccess } from "../../../Actions/userAction";
import { toast } from "react-toastify";
import logo from "../../../assets/logo.png"
const Register = () => {
  const dispatch = useDispatch();
  const { loading,isRegistered, error, user } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const onSubmit = (fieldsValue) => {
    fieldsValue.phone = "+44" + fieldsValue.phone;
    dispatch(registerUser(fieldsValue));
  };

  useEffect(() => {
    if (isRegistered) {
      console.log("sdkfdskfdsfsd")
      toast.success("success");
      dispatch(clearSuccess());
      navigate("/login");
    } else if (error) {
     
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, isRegistered, error]);

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
      <Form className="login-form"
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
        <div className="text-center">
          <img src={logo} alt="logo" style={{ width: '90px', height: '90px' }} />
        </div>
        <h3 className="text-login">Register</h3>
        <Form.Item
          label="Title"
          name="title"
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
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
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
          label="Phone"
          name="phone"

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

        <div className="d-flex flex-column align-items-center">
          <Button className="login-btn" htmlType="submit">
            Register
          </Button>
          <br />
          <Link to="/login" relative="path">
            Already Registered?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
