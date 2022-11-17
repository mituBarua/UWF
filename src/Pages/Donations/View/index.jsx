import React, { useEffect, useState } from "react";

import {
  Checkbox,
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

import { toast } from "react-toastify";

import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getDonationByID } from "../../../Actions/donationAction";
// import "../Create/style.css";

import Spinner from "../../../Components/Spinner";

import { mediaList, typeList } from "../../../Utils/medialist";

const { Option } = Select;

const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [mediaForm] = Form.useForm();
  const [paragraphForm] = Form.useForm();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { donation, loading, error } = useSelector((state) => state.donation);

  useEffect(() => {
    dispatch(getDonationByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error]);

  useEffect(() => {
    form.setFieldsValue({
      just_giving_donation_id: donation?.just_giving_donation_id,
      amount: donation?.amount,
      created_at: donation?.created_at,
      is_monthly: donation?.is_monthly,
      payment_ref: donation?.payment_ref,
    });
  }, [donation]);

  if (loading) return <Spinner />;
  return (
    <div className="formLayout">
      <div className="form-designView">
        <h3>Donation Details</h3>
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
          <Form.Item label="Donation ID" name="just_giving_donation_id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Amount" name="amount">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Date" name="created_at">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Reference" name="payment_ref">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Monthly" name="is_monthly" valuePropName="checked">
            <Checkbox disabled />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default View;
