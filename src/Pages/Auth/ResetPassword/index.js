import React, { useEffect } from "react";
import { Button, Form, Input, Spin } from "antd";
import Spinner from "../../../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearErrors, ChangePassword } from "../../../Actions/resetPasswordAction";
import { toast } from "react-toastify";
import "./style.css";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { loading,success,error } = useSelector(
    (state) => state.resetPassword
  );
  const navigate = useNavigate();
  const onSubmit = (fieldsValue) => {
    dispatch(ChangePassword(fieldsValue));
  };
  useEffect(() => {
    if (success) {
      toast.success("success");
      navigate("/login");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading,success, error]);


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
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onSubmit}
        //onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {" "}
        <h2 className="text-login">Reset Password</h2>

        <Form.Item
          label="Passcode"
          name="passcode"
          rules={[
            {
              required: true,
              message: "Please input your Passcode!",
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
              message: "Please input your new password!",
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
          <Button className="login-btn" htmlType="submit">
            Submit
          </Button>
          <br />
        

        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
