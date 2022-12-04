import React, { useEffect, useState } from "react";

import { Checkbox, Form, Input, DatePicker, Button, Card } from "antd";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import {
  getProjectByID,
  clearErrors,
  updateProject,
} from "../../../Actions/projectAction";
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

  const { loading, error, project, success } = useSelector(
    (state) => state.project
  );

  useEffect(() => {
    dispatch(getProjectByID(accessToken, id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      title: project?.title,
      description: project?.description,
      is_active: project?.is_active,
      date: [moment(project?.start_date), moment(project?.end_date)],
    });
  }, [project]);

  useEffect(() => {
    if (success && success.type == "project_update_success") {
      toast.success("Project Updated Successfully");
      navigate("/project/list");
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
    data.start_date = moment(fieldsValue.date[0]).format("YYYY-MM-DD");
    data.end_date = moment(fieldsValue.date[1]).format("YYYY-MM-DD");

    dispatch(updateProject(accessToken, id, data));
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
            title="Edit Project"
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
              {...formItemLayout}
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
            <Form.Item
              label="Verified"
              name="is_verified"
              {...formItemLayout}
              valuePropName="checked"
              rules={[
                {
                  required: false,
                  message: "Please input your verification!",
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
                    moment().add(0, "days") >= current ||
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
