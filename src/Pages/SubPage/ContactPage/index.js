import React, { useState, useEffect } from 'react';
import HeaderMenu from '../../Shared/HeaderMenu';
import { useDispatch, useSelector } from "react-redux";
import Banner from '../Banner';
import { toast } from "react-toastify";
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import './style.css'
import { createMessage, clearErrors, clearSuccess } from '../../../Actions/messageAction';
import Spinner from "../../../Components/Spinner";

const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    message: ""

}
const Contact = () => {
    const dispatch = useDispatch();
    const { error, success, loading } = useSelector(
        (state) => state.message
    );

    useEffect(() => {
        if (success && success.type == "message_create_success") {
            toast.success("Message Sent Successfully");
            dispatch(clearSuccess());
            setFormData(initialValue)
        } else if (error) {
            toast.error(error.message);
            dispatch(clearErrors());
        }
    }, [error, loading, success]);
    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevValue) => {

            return {
                ...prevValue,
                [name]: value
            }
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, email, message } =
            formData;

        const data = new FormData();
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("email", email);
        data.append("message", message);
        dispatch(createMessage(formData));

    }
    if (loading) return <Spinner />;
    return (
        <div>
            <HeaderMenu />
            <Banner name="Contact" />
            <Row>
                <Col md="2"></Col>
                <Col md="8">
                    <div className="contact-form container">
                        <div className="contact-text">
                            <h3>Contact</h3>
                            <p>Let us know about your question</p>
                        </div>

                        <Form className="form-style" onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" name="first_name" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" name="last_name" onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                            </Form.Group>
                            <FloatingLabel className="mb-4" controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a message here"
                                    style={{ height: '100px' }}
                                    name="message"
                                    onChange={handleChange}
                                />
                            </FloatingLabel>
                            <Button className="donate btn btn-primary submit" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col md="2"></Col>
            </Row>
        </div>
    );
};

export default Contact;