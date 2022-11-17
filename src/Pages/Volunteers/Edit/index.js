import React, { useEffect, useState } from "react";

import { Form, Input, Button, Upload, Card } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import {
  getVolunteerByID,
  clearErrors,
  updateVolunteer,
} from "../../../Actions/volunteerAction";
import Spinner from "../../../Components/Spinner";

import { mediaList } from "../../../Utils/medialist";

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

  const { loading, error, volunteer, success } = useSelector(
    (state) => state.volunteer
  );

  useEffect(() => {
    dispatch(getVolunteerByID(accessToken, id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      first_name: volunteer?.first_name,
      last_name: volunteer?.last_name,
      phone: volunteer?.phone,
      email: volunteer?.email,
      address: volunteer?.address,
      additional_note: volunteer?.additional_note,
    });
  }, [volunteer]);

  const [fileList, setFileList] = useState([]);

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

  useEffect(() => {
    if (success && success.type == "volunteer_update_success") {
      toast.success("Volunteer Updated Successfully");
      navigate("/volunteer/list");
    } else if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error, success]);

  const onSubmit = (fieldsValue) => {
    const { first_name, last_name, phone, email, address, additional_note } =
      fieldsValue;

    const data = new FormData();
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("phone", phone);
    data.append("email", email);
    data.append("address", address);
    data.append("additional_note", additional_note);

    fileList.forEach((file) => {
      data.append("profile_picture", file);
    });
    dispatch(updateVolunteer(accessToken, id, data));
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
            title="Edit Volunteer"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Form.Item
              label="First Name"
              name="first_name"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="last_name"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please input your valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Additional Note"
              name="additional_note"
              {...formItemLayout}
              rules={[
                {
                  required: true,
                  message: "Please input your Additional Note!",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Additional Note"
                maxLength={250}
              />
            </Form.Item>
            <Form.Item
              label="Profile Picture"
              name="profie_picture"
              {...formItemLayout}
              rules={[
                {
                  validator: (_, value) => {
                    if (fileList.length > 0) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject("Please upload profile picture");
                    }
                  },
                },
              ]}
            >
              <Upload {...props} accept={mediaList["image"]}>
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
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
