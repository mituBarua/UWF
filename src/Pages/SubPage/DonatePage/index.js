import React, { useState, useEffect } from "react";
import HeaderMenu from "../../Shared/HeaderMenu";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../Banner";
import { toast } from "react-toastify";
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  InputGroup,
} from "react-bootstrap";
import "../ContactPage/style.css";
import {
  createDonation,
  clearErrors,
  clearSuccess,
} from "../../../Actions/donationAction";
import Spinner from "../../../Components/Spinner";
const initialValue = {
  amount: "",
};
const DonatePage = () => {
  const dispatch = useDispatch();

  const { error, success, loading } = useSelector((state) => state.donation);

  useEffect(() => {
    if (success && success.type == "donation_create_success") {
      toast.success("Donation Sent Successfully");
      dispatch(clearSuccess());
      setFormData(initialValue);
      window.location.replace(success.url);
    } else if (error) {
      toast.error(error.donation);
      dispatch(clearErrors());
    }
  }, [error, loading, success]);
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { amount } = formData;

    const data = new FormData();
    data.append("amount", amount);

    dispatch(createDonation(formData));
  };

  if (loading) return <Spinner />;
  return (
    <div>
      <HeaderMenu />
      <Banner name="Donate" />
      <Row>
        <Col md="2"></Col>
        <Col md="8">
          <div className="contact-form container">
            <div className="contact-text">
              <h3>Donation Details</h3>
              <p>Give your hands spread to Others</p>
            </div>

            <Form className="form-style" onSubmit={handleSubmit}>
              <Row>
                <Col>
                <Form.Label htmlFor="amount">Enter Amount</Form.Label>
                  <InputGroup className="mb-5 w-75">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      aria-label="Amount (to the nearest dollar)"
                      name="amount"
                      onChange={handleChange}
                    />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Row>

              <Button className="donate btn btn-primary submit" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Col>
        <Col md="2"></Col>
      </Row>
    </div>
  );
};

export default DonatePage;
