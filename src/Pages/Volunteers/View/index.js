import React, { useEffect } from "react";

import { Checkbox, Form, Input, Image, Row, Col, Card } from "antd";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVolunteerByID } from "../../../Actions/volunteerAction";
// import '../Create/style.css';
const View = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const {
        user: { accessToken },
    } = useSelector((state) => state.user);

    const { volunteer } = useSelector((state) => state.volunteer);

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
    },[volunteer]);
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
                        label="Fist Name"
                        name="first_name"
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

                        rules={[
                            {
                                required: false,
                                message: "Please input your additional note!",
                            },
                        ]}
                    >
                        <Input.TextArea rows={4} placeholder="Additional Note" maxLength={6}/>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
};

export default View;
