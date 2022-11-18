import React, { useEffect } from "react";

import { Checkbox, Form, Input, Select, Card } from "antd";

import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getDonationByID } from "../../../Actions/donationAction";
import "../style.css";

import Spinner from "../../../Components/Spinner";

const { Option } = Select;

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
    <div className="form-layout">
      <div className="form-design-view">
        <Card
          title="View Donation"
          style={{ marginBottom: 10 }}
          className="resume__basic"
        >
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
            <Form.Item
              {...formItemLayout}
              label="Donation ID"
              name="just_giving_donation_id"
            >
              <Input disabled />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Amount" name="amount">
              <Input disabled />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Date" name="created_at">
              <Input disabled />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Reference" name="payment_ref">
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Monthly"
              name="is_monthly"
              {...formItemLayout}
              valuePropName="checked"
            >
              <Checkbox disabled />
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default View;
