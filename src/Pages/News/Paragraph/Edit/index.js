import React, { useEffect, useState } from "react";

import { Form, Input, InputNumber, Button, Select } from "antd";

import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getCampaignPargraphByID,
  updateCampaignParagraph,
} from "../../../../Actions/campaignAction";
import "../../Create/style.css";

import Spinner from "../../../../Components/Spinner";

const { Option } = Select;

const ParagraphEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paragraphForm] = Form.useForm();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);
  const { campaignParagraph, loading, error, success } = useSelector(
    (state) => state.campaign
  );

  useEffect(() => {
    dispatch(getCampaignPargraphByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "campaign_paragraph_update_success") {
      toast.success("Campaign Paragraph Updated");
      navigate(`/campaign/${success.modelId}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  useEffect(() => {
    paragraphForm.setFieldsValue({
      p_title: campaignParagraph?.title,
      p_body: campaignParagraph?.body,
      p_serial_number: campaignParagraph?.serial_number,
    });
  }, [campaignParagraph]);

  const onParagraphSubmit = (fieldsValue) => {
    let data = {};
    const { p_title, p_body, p_serial_number } = fieldsValue;
    data.title = p_title;
    data.body = p_body;
    data.serial_number = p_serial_number;

    let modelId = campaignParagraph?.model_id;
    dispatch(updateCampaignParagraph(accessToken, data, id, modelId));
  };

  if (loading) return <Spinner />;
  return (
    <div className="formLayout">
      <div className="form-designView">
        <h3>Campaign Paragraph Details</h3>
        {/* Paragraph */}
        <Form
          name="paragraph"
          form={paragraphForm}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onParagraphSubmit}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="p_title"
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
            label="Body"
            name="p_body"
            rules={[
              {
                required: true,
                message: "Please input your body!",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Body" />
          </Form.Item>
          <Form.Item
            label="Serial Number"
            name="p_serial_number"
            rules={[
              {
                required: true,
                message: "Please input your serial number!",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Update</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ParagraphEdit;
