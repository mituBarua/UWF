import React, { useEffect, useState } from "react";

import { Checkbox, Form, Input, DatePicker, Button, Modal, Upload } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";

import { useParams, useNavigate } from "react-router-dom";
import {
    getVolunteerByID,
    clearErrors,
    updateVolunteer,
} from "../../../Actions/volunteerAction";
import Spinner from "../../../Components/Spinner";

const { RangePicker } = DatePicker;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

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

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewVisible(false);

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
        let data = {};
        data.first_name = fieldsValue.first_name;
        data.last_name = fieldsValue.last_name;
        data.phone = fieldsValue.phone
        data.email = fieldsValue.email
        data.address = fieldsValue.address
        data.additional_note = fieldsValue.additional_note
        // data.media_list = fileList;
        // data.paragraphs = fieldsValue.paragraphs;
        dispatch(updateVolunteer(accessToken, id, data));
    };
    if (loading) return <Spinner />;
    return (
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
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="First Name"
                name="first_name"
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
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
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
                rules={[
                    {
                        required: true,
                        message: "Please input your Additional Note!",
                    },
                ]}
            >
                <Input.TextArea rows={4} placeholder="Additional Note" maxLength={6} />
            </Form.Item>

            {/* <Form.Item label="Media" name="media_list">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
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
      <Form.Item label="Paragraphs" name="paragraphs">
        <Form.List
          name="paragraphs"
          // rules={[
          //   {
          //     validator: async (_, names) => {
          //       if (!names || names.length < 2) {
          //         return Promise.reject(new Error("At least 2 passengers"));
          //       }
          //     },
          //   },
          // ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                  // label={index === 0 ? "Passengers" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    name={[index, "title"]}
                    // rules={[
                    //   {
                    //     required: true,
                    //     whitespace: true,
                    //     message:
                    //       "Please input para's name or delete this field.",
                    //   },
                    // ]}
                    noStyle
                  >
                    <Input placeholder="title" style={{ width: "60%" }} />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    name={[index, "body"]}
                    // rules={[
                    //   {
                    //     required: true,
                    //     whitespace: true,
                    //     message:
                    //       "Please input para's name or delete this field.",
                    //   },
                    // ]}
                    noStyle
                  >
                    <Input placeholder="body" style={{ width: "60%" }} />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    name={[index, "serial_number"]}
                    // rules={[
                    //   {
                    //     required: true,
                    //     whitespace: true,
                    //     message:
                    //       "Please input para's name or delete this field.",
                    //   },
                    // ]}
                    noStyle
                  >
                    <Input
                      placeholder="serial number"
                      style={{ width: "60%" }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item> */}
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default Edit;
