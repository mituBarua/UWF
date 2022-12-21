import React, { useEffect } from "react";
import { Button, Form, InputNumber, Spin } from "antd";
import Spinner from "../../../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  clearErrors,
  ForgotPassword,
} from "../../../Actions/forgotPasswordAction";
import { toast } from "react-toastify";
import "./style.css";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.forgotPassword
  );
  const navigate = useNavigate();
  const onSubmit = (fieldsValue) => {
    fieldsValue.phone = "+44" + fieldsValue.phone;
    dispatch(ForgotPassword(fieldsValue));
  };
  useEffect(() => {
    if (success) {
      toast.success("success");
      navigate("/resetPassword");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, success, error]);

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
        className="login-form"
        name="basic"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <h2 className="text-login">Forgot Password?</h2>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
            {
              validator: (_, value) => {
                const re = /^[0-9\b]+$/;
                if (value.toString().length == 8 && re.test(value.toString())) {
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
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="login-btn" htmlType="submit">
            Submit
          </Button>
          <br />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgetPassword;
