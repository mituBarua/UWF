import React, { useEffect, useState } from "react";

import {
  Checkbox, Form, Input, Image, Row, Col, Card, Upload, InputNumber,
  Button, Select
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProjectMedia,
  addProjectParagraph, getProjectByID, clearErrors
} from "../../../Actions/projectAction";
import '../Create/style.css';
import { toast } from "react-toastify";
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

  const { project, loading, error, success } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProjectByID(accessToken, id));
  }, []);
  useEffect(() => {
    if (success && success.type == "project_paragraph_success") {
      toast.success("Project Paragraph Added");
      navigate(`/project/paragraph/list/${id}`);
    } else if (success && success.type == "project_media_success") {
      toast.success("Project Media Added");
      navigate(`/project/media/list/${id}`);
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  useEffect(() => {
    form.setFieldsValue({
      title: project?.title,
      description: project?.description,
      is_active: project?.is_active,
    });
  }, [project]);

  const onMediaSubmit = (fieldsValue) => {
    const data = new FormData();
    data.append("type", typeList[mediaType]);
    data.append("model_name", "Campaign");
    data.append("model_id", id);

    fileList.forEach((file) => {
      data.append("the_file", file);
    });
    dispatch(addProjectMedia(accessToken, data));
  };

  const onParagraphSubmit = (fieldsValue) => {
    let data = {};
    const { p_title, p_body, p_serial_number } = fieldsValue;
    data.title = p_title;
    data.body = p_body;
    data.serial_number = p_serial_number;
    data.model_id = id;
    data.model_name = "Campaign";

    dispatch(addProjectParagraph(accessToken, data));
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
    <div className="formLayout">
      <div className="form-designView">
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          // onFinish={onFinish}
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
            <Checkbox disabled />
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
          <h3>
            Media <Link to={`/project/media/list/${id}`}>list</Link>
          </h3>
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

          {mediaType && (
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
              <Upload {...props} accept={mediaList[mediaType]}>
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
            </Form.Item>
          )}
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
          <h3>
            Paragraph <Link to={`/project/paragraph/list/${id}`}>list</Link>
          </h3>
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
{/* <h2>Media</h2>
<div style={{ textAlign: "center" }}>
  {project?.media_list.map(({ id, url }) => (
    <Image key={id} width={200} src={url} />
  ))}
</div>
<h2>Paragraphs</h2>
<br />
<Row gutter={16}>
  {project?.paragraphs.map(({ title, body }) => (
    <Col span={8}>
      <Card title={title} bordered={false}>
        {body}
      </Card>
    </Col>
  ))}
</Row> */}