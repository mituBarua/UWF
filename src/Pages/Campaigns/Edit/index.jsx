import React, { useEffect } from "react";

import { Checkbox, Form, Input, DatePicker, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import {
  getCampaignByID,
  clearErrors,
  updateCampaign,
} from "../../../Actions/campaignAction";
import Spinner from "../../../Components/Spinner";
import "../style.css";

const { RangePicker } = DatePicker;

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

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { id } = useParams();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { loading, error, campaign, success } = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    dispatch(getCampaignByID(accessToken, id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      title: campaign?.title,
      description: campaign?.description,
      is_active: campaign?.is_active,
      is_verified: campaign?.is_verified,
      date: [moment(campaign?.start_date), moment(campaign?.end_date)],
    });
  }, [campaign]);

  useEffect(() => {
    if (success && success.type == "campaign_update_success") {
      toast.success("Campaign Updated Successfully");
      navigate("/campaign/list");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const onSubmit = (fieldsValue) => {
    let data = {};
    data.title = fieldsValue.title;
    data.description = fieldsValue.description;
    data.is_active = fieldsValue.is_active == true ? 1 : 0;
    data.is_verified = fieldsValue.is_verified == true ? 1 : 0;
    data.start_date = moment(fieldsValue.date[0]).format("YYYY-MM-DD");
    data.end_date = moment(fieldsValue.date[1]).format("YYYY-MM-DD");

    dispatch(updateCampaign(accessToken, id, data));
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
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Card
            title="Edit Campaign"
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
              label="Description"
              name="description"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Description" />
            </Form.Item>
            <Form.Item
              label="Status"
              name="is_active"
              valuePropName="checked"
              {...formItemLayout}
              rules={[
                {
                  required: false,
                  message: "Please input your status!",
                },
              ]}
            >
              <Checkbox />
            </Form.Item>
            <Form.Item
              label="Verify"
              name="is_verified"
              valuePropName="checked"
              {...formItemLayout}
              rules={[
                {
                  required: false,
                  message: "Please verify!",
                },
              ]}
            >
              <Checkbox />
            </Form.Item>
            <Form.Item
              label="Date"
              name="date"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your start & end date!",
                },
              ]}
            >
              <RangePicker
                disabledDate={(current) => {
                  return (
                    moment().add(-1, "days") >= current ||
                    moment().add(1, "month") <= current
                  );
                }}
              />
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
