import React, { useEffect, useState } from "react";

import {
  Checkbox,
  Form,
  Input,
  InputNumber,
  Button,
  Modal,
  Upload,
  Select,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCampaignMedia,
  addCampaignParagraph,
  clearErrors,
  getCampaignByID,
} from "../../../Actions/campaignAction";
import "../Create/style.css";

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
  const { loading, error, success } = useSelector((state) => state.campaign);

  const { campaign } = useSelector((state) => state.campaign);

  useEffect(() => {
    dispatch(getCampaignByID(accessToken, id));
  }, []);

  useEffect(() => {
    if (success && success.type == "campaign_paragraph_success") {
      toast.success("Campaign Paragraph Added");
      navigate("/campaign/list");
    } else if (success && success.type == "campaign_media_success") {
      toast.success("Campaign Media Added");
      navigate("/campaign/list");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  useEffect(() => {
    form.setFieldsValue({
      title: campaign?.title,
      description: campaign?.description,
      is_active: campaign?.is_active,
    });
  }, [campaign]);

  const onMediaSubmit = (fieldsValue) => {
    const data = new FormData();
    data.append("type", typeList[mediaType]);
    data.append("model_name", "Campaign");
    data.append("model_id", id);

    console.log(fileList);

    fileList.forEach((item) => {
      data.append("the_file", item);
    });

    dispatch(addCampaignMedia(accessToken, data));
  };

  const onParagraphSubmit = (fieldsValue) => {
    let data = {};
    const { p_title, p_body, p_serial_number } = fieldsValue;
    data.title = p_title;
    data.body = p_body;
    data.serial_number = p_serial_number;
    data.model_id = id;
    data.model_name = "Campaign";

    dispatch(addCampaignParagraph(accessToken, data));
  };

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [mediaType, setMediaType] = useState("");

  const handleMediaTypeChange = (value) => setMediaType(value);
  const handleCancel = () => setPreviewVisible(false);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const beforeUpload = (file) => {
    let list = [];
    if (mediaType == "") {
      toast.error("Please select media type");
    } else list = mediaList[mediaType].filter((item) => item === file.type);

    const isValid = list.length != 0;
    if (!isValid && mediaType) {
      toast.error(`${file.type} is not valid`);
    }
    return isValid || Upload.LIST_IGNORE;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  if (loading) return <Spinner />;
  return (
    <div className="formLayout">
      <div className="form-designView">
        <h3>Campaign Details</h3>
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          // onFinish={onSubmit}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
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
            rules={[
              {
                required: false,
                message: "Please input your description!",
              },
            ]}
          >
            <Input.TextArea rows={4} placeholder="Description" maxLength={6} />
          </Form.Item>
          <Form.Item
            label="Status"
            name="is_active"
            valuePropName="checked"
            rules={[
              {
                required: false,
                message: "Please input your status!",
              },
            ]}
          >
            <Checkbox />
          </Form.Item>
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
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h3>Media</h3>
          <Form.Item
            label="Media type"
            name="type"
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

          <Form.Item
            label="Media"
            name="media_list"
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
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
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
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h3>Paragraph</h3>
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
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default View;
