import React from 'react';
import footerLogo from "../../../assets/Unity Logo-01.png";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillEnvelopeFill } from "react-icons/bs";
import './style.css';
const Footer = () => {
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
                            <p>Unity Welfare Foundation is a UK based registered charity organisation. It was established in 2009. We provide help to people who are victims of natural disasters, conflict or suffering from poverty, hunger, disease, illiteracy , discrimination, homelessness, unemployment, injustice, deprivation or lack of skills and economic opportunities.</p>
                        </div>
                        <div className="contact">
                            <h5>Contact Us</h5>
                            <ul>
                                <li><span>Phone : 000 000 000</span></li>
                                <li><span>Email: unitywf@gmail.com </span></li>
                                <li><span>Address: UK</span></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <h5>Our Project</h5>
                        <ul className="link-color">
                            <li>   <Link to="/" relative="path">
                                Project Name
                            </Link></li>
                            <li>   <Link to="/" relative="path">
                                Project Name
                            </Link></li>
                            <li>   <Link to="/" relative="path">
                                Project Name
                            </Link></li>
                            <li>   <Link to="/" relative="path">
                                Project Name
                            </Link></li>
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
                                    Projects                            </Link>
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
                        <h5>NewsLetter</h5>
                        <p>Enter Your Email Address and Click Subscribe</p>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Enter your email here"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">
                                <BsFillEnvelopeFill className="message-icon"/>
                            </InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;