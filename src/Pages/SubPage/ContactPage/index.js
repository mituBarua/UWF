import React from 'react';
import HeaderMenu from '../../Shared/HeaderMenu';
import Banner from '../Banner';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import './style.css'
const Contact = () => {
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

                        <Form className="form-style">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="email" placeholder="First Name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="email" placeholder="Last Name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-4" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <FloatingLabel className="mb-4" controlId="floatingTextarea2" label="Message">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a message here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button className="donate btn btn-primary submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col md="2"></Col>
            </Row>
        </div>
    );
};

export default Contact;