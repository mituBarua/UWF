import React, { useEffect } from "react";

import { Form, Input, InputNumber, Button, Select, Card } from "antd";

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
    <div className="form-layout">
      <div className="form-design-view">
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
          autoComplete="off"
        >
          <Card
            title="Paragraph Edit"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Form.Item
              label="Title"
              name="p_title"
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
              label="Body"
              name="p_body"
              {...formItemLayout}
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
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your serial number!",
                },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>
            <Form.Item {...formItemLayoutWithOutLabel}>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default ParagraphEdit;
