import React, { useEffect, useState } from "react";

import {
  Checkbox,
  Form,
  Input,
  Upload,
  InputNumber,
  Card,
  Button,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAppealMedia,
  addAppealParagraph,
  getAppealByID,
  clearErrors,
} from "../../../Actions/appealAction";
import "../style.css";
import { toast } from "react-toastify";
import Spinner from "../../../Components/Spinner";
import { mediaList, typeList } from "../../../Utils/medialist";
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

  const { appeal, loading, error, success } = useSelector(
    (state) => state.appeal
  );

  useEffect(() => {
    dispatch(getAppealByID(accessToken, id));
  }, []);
  useEffect(() => {
    if (success && success.type == "appeal_paragraph_success") {
      toast.success("Appeal Paragraph Added");
      navigate(`/appeal/paragraph/list/${id}`);
    } else if (success && success.type == "appeal_media_success") {
      toast.success("Appeal Media Added");
      navigate(`/appeal/media/list/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);
  useEffect(() => {
    form.setFieldsValue({
      title: appeal?.title,
      description: appeal?.description,
      is_active: appeal?.is_active,
    });
  }, [appeal]);

  const onMediaSubmit = (fieldsValue) => {
    const data = new FormData();
    data.append("type", typeList[mediaType]);
    data.append("model_name", "Campaign");
    data.append("model_id", id);

    fileList.forEach((file) => {
      data.append("the_file", file);
    });
    dispatch(addAppealMedia(accessToken, data));
  };

  const onParagraphSubmit = (fieldsValue) => {
    let data = {};
    const { p_title, p_body, p_serial_number } = fieldsValue;
    data.title = p_title;
    data.body = p_body;
    data.serial_number = p_serial_number;
    data.model_id = id;
    data.model_name = "Campaign";

    dispatch(addAppealParagraph(accessToken, data));
  };
  const [fileList, setFileList] = useState([]);
  const [mediaType, setMediaType] = useState("");

  const handleMediaTypeChange = (value) => setMediaType(value);

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
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
          autoComplete="off"
        >
          <Card
            title="View Appeal"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Form.Item
              label="Title"
              name="title"
              {...formItemLayout}
              rules={[
                {
                  required: false,
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
                  required: false,
                  message: "Please input your description!",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Description"
                maxLength={6}
              />
            </Form.Item>
            <Form.Item
              label="Status"
              name="is_active"
              {...formItemLayout}
              valuePropName="checked"
              rules={[
                {
                  required: false,
                  message: "Please input your status!",
                },
              ]}
            >
              <Checkbox disabled />
            </Form.Item>
          </Card>
        </Form>
        {/* Media */}

        <Form
          name="media"
          form={mediaForm}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onMediaSubmit}
          autoComplete="off"
        >
          <Card
            title="Media Appeal"
            style={{ marginBottom: 10 }}
            className="resume__basic"
            extra={
              <Button onClick={() => navigate(`/appeal/media/list/${id}`)}>
                Media List
              </Button>
            }
          >
            <Form.Item
              label="Media type"
              name="type"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your media type!",
                },
              ]}
            >
              <Select
                style={{
                  width: 120,
                }}
                onChange={handleMediaTypeChange}
              >
                <Option value="image">Image</Option>
                <Option value="video">Video</Option>
                <Option value="word_doc">Word Document</Option>
                <Option value="pdf">PDF</Option>
              </Select>
            </Form.Item>

            {mediaType && (
              <Form.Item
                label="Media"
                name="media_list"
                {...formItemLayout}
                rules={[
                  {
                    validator: (_, value) => {
                      if (fileList.length > 0) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject("Please upload your media file");
                      }
                    },
                  },
                ]}
              >
                <Upload {...props} accept={mediaList[mediaType]}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
              </Form.Item>
            )}
            <Form.Item {...formItemLayoutWithOutLabel}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Card>
        </Form>

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
            title="Paragraph Appeal"
            style={{ marginBottom: 10 }}
            className="resume__basic"
            extra={
              <Button onClick={() => navigate(`/appeal/paragraph/list/${id}`)}>
                Paragraph List
              </Button>
            }
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
                Submit
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default View;
