import React from 'react';
import HeaderMenu from '../../Shared/HeaderMenu';
import Banner from '../Banner';
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
const Volunteer = () => {
    return (
        <div>
            <HeaderMenu />
            <Banner name="Volunteer" />
            <Row>
                <Col md="2"></Col>
                <Col md="8">
                    <div className="contact-form container">
                        <div className="contact-text">
                            <h3>Volunteer Details</h3>
                            <p>Would you like to be a volunteer?</p>
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
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Phone no" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel className="mb-4" controlId="floatingTextarea2" label="Address">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a message here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel className="mb-4" controlId="floatingTextarea2" label="Additional Note">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a message here"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Button className="donate btn btn-primary submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col md="2"></Col>
            </Row>
        </div>
    );
};

export default Volunteer;