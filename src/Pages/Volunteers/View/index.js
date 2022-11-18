import React, { useEffect, useState } from "react";

import { Form, Input, Image, Card } from "antd";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerByID } from "../../../Actions/volunteerAction";
import "../Create/style.css";

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

  const [form] = Form.useForm();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { volunteer } = useSelector((state) => state.volunteer);

  const [profilePic, setProfilePic] = useState("");

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
    setProfilePic(volunteer?.profile_picture);
  }, [volunteer]);
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
            title="View Volunteer"
            style={{ marginBottom: 10 }}
            className="resume__basic"
          >
            <Form.Item {...formItemLayout} style={{ textAlign: "center" }}>
              <Image
                src={profilePic}
                alt="Profile Picture"
                style={{ width: 200, height: 200, borderRadius: 100 }}
              />
            </Form.Item>
            <Form.Item
              label="Fist Name"
              name="first_name"
              {...formItemLayout}
              rules={[
                {
                  required: false,
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
                  required: false,
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
                  required: false,
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
                  required: false,
                  message: "Please input your email!",
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
                  required: false,
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
                  required: false,
                  message: "Please input your additional note!",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Additional Note"
                maxLength={6}
              />
            </Form.Item>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default View;
