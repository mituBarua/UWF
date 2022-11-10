import React, { useState, useEffect } from 'react';
import HeaderMenu from '../../Shared/HeaderMenu';
import { useDispatch, useSelector } from "react-redux";
import Banner from '../Banner';
import { toast } from "react-toastify";
import { Form, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import { createDataVolunteer, clearErrors, clearSuccess } from '../../../Actions/volunteerAction';
import { mediaList } from '../../../Utils/medialist';
import Spinner from "../../../Components/Spinner";

const initialValue = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    additional_note: "",
    profile_picture: null

}
const Volunteer = () => {
    const dispatch = useDispatch();
    const { error, success,loading } = useSelector(
        (state) => state.volunteer
    );

    useEffect(() => {
        if (success && success.type == "volunteer_create_success") {
            toast.success("Volunteer Created Successfully");
            dispatch(clearSuccess());
            setFormData(initialValue)
        } else if (error) {
            toast.error(error.message);
            dispatch(clearErrors());
        }
    }, [error,loading, success]);


    const [formData, setFormData] = useState(initialValue)
    const handleChange = (event) => {
        const { name, value, files } = event.target;

        setFormData((prevValue) => {
            let val = value;
            if (name == 'profile_picture') {
                val = files[0]
            }
            return {
                ...prevValue,
                [name]: val
            }
        })

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, phone, email, address, additional_note, profile_picture } =
            formData;

        const data = new FormData();
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("phone", phone);
        data.append("email", email);
        data.append("address", address);
        data.append("additional_note", additional_note);
        data.append("profile_picture", profile_picture);

       
        dispatch(createDataVolunteer(formData));

    }
    if (loading) return <Spinner />;
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

                        <Form className="form-style" onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" name="first_name" required onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" name="last_name" required onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Phone no" name="phone" required onChange={handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Email" name="email" required onChange={handleChange} />
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
                                            name="address"
                                            required
                                            onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel className="mb-4" controlId="floatingTextarea2" label="Additional Note">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a message here"
                                            style={{ height: '100px' }}
                                            required
                                            name="additional_note"
                                            onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Please upload your image</Form.Label>
                                <Form.Control type="file" required accept={mediaList['image']} name="profile_picture" onChange={handleChange} />
                            </Form.Group>

                            <Button className="donate btn btn-primary submit" type='submit' >Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col md="2"></Col>
            </Row>
        </div>
    );
};

export default Volunteer;