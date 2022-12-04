import React, { useState, useEffect } from "react";
import footerLogo from "../../../assets/Unity Logo-01.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { InputGroup, Button } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import "./style.css";

import {
  createMessage,
  clearSuccess,
  clearErrors,
} from "../../../Actions/messageAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../Components/Spinner";
import { toast } from "react-toastify";

const Footer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { loading, success, error } = useSelector((state) => state.message);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = () => {
    if (validateEmail(email) == null)
      return toast.error("Please enter a valid email");
    let data = {
      first_name: "Unknown",
      last_name: "Unknown",
      message: "Please contact with the email user",
    };
    data.email = email;
    dispatch(createMessage(data));
  };

  useEffect(() => {
    if (success && success.type == "message_create_success") {
      toast.success("Thanks! We will contact with you soon!");
      setEmail("");
      dispatch(clearSuccess());
    }
    if (error) {
      toast.error(error.message);
      dispatch(clearErrors());
    }
  }, [loading, error]);

  return (
    <div className="footer-bg">
      <div className="container footer">
        <br />
        <div className="row">
          <div className="footer-img">
            <img src={footerLogo} alt="footer-img" />
          </div>

          <div className="col-md-5">
            <div className="about">
              <h5>About Us</h5>
              <p>
                Unity Welfare Foundation is a UK based registered charity
                organisation. It was established in 2009. We provide help to
                people who are victims of natural disasters, conflict or
                suffering from poverty, hunger, disease, illiteracy ,
                discrimination, homelessness, unemployment, injustice,
                deprivation or lack of skills and economic opportunities.
              </p>
            </div>
            <div className="contact">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <span>Phone : 000 000 000</span>
                </li>
                <li>
                  <span>Email: unitywf@gmail.com </span>
                </li>
                <li>
                  <span>Address: UK</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <h5>Our Project</h5>
            <ul className="link-color">
              <li>
                <Link to="/" relative="path">
                  Project Name
                </Link>
              </li>
              <li>
                <Link to="/" relative="path">
                  Project Name
                </Link>
              </li>
              <li>
                <Link to="/" relative="path">
                  Project Name
                </Link>
              </li>
              <li>
                <Link to="/" relative="path">
                  Project Name
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="link-color">
              <li>
                <Link to="/" relative="path">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/project" relative="path">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/events" relative="path">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" relative="path">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 newsletter">
            <h5>News Letter</h5>
            <p>Enter Your Email Address and Click Subscribe</p>
            <InputGroup className="mb-3">
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <BsFillEnvelopeFill className="message-icon" />
              </InputGroup.Text>
            </InputGroup>
            <Button
              variant="danger"
              disabled={loading}
              onClick={!loading ? onSubmit : null}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
