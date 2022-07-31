import React, { useEffect } from "react";

import { Checkbox, Form, Input, Image, Row, Col, Card } from "antd";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByID } from "../../../Actions/newsAction";
import '../../Projects/Create/style.css';
const View = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const {
    user: { accessToken },
  } = useSelector((state) => state.user);

  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsByID(accessToken, id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      title: news?.title,
      description: news?.description,
      is_active: news?.is_active,
    });
  }, [news]);
  return (
    <div  className="formLayout">
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
        <Checkbox />
      </Form.Item>
      <h2>Media</h2>
      <div style={{textAlign:"center"}}>
      {news?.media_list.map(({ id, url }) => (
        <Image key={id} width={200} src={url} />
      ))}
      </div>
      <h2>Paragraphs</h2>
    <br/>
      <Row gutter={16}>
        {news?.paragraphs.map(({ title, body }) => (
          <Col span={8}>
            <Card title={title} bordered={false}>
              {body}
            </Card>
          </Col>
        ))}
      </Row>
     
    </Form>
    </div>
    </div>
  );
};

export default View;
